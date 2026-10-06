const COOKIE_NAME = "kk_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function toBase64Url(value: string | ArrayBuffer) {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  return atob(normalized);
}

async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toBase64Url(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)));
}

export async function createAdminSession(email: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured");
  const payload = toBase64Url(JSON.stringify({ email, exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS }));
  return `${payload}.${await sign(payload, secret)}`;
}

export async function verifyAdminSession(token?: string | null) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || !token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || signature !== await sign(payload, secret)) return false;
  try {
    const parsed = JSON.parse(fromBase64Url(payload)) as { exp?: number };
    return Boolean(parsed.exp && parsed.exp > Math.floor(Date.now() / 1000));
  } catch {
    return false;
  }
}

export { COOKIE_NAME, SESSION_TTL_SECONDS };
