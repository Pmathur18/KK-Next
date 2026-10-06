import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, SESSION_TTL_SECONDS, createAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json() as { email?: string; password?: string };
  if (!email || !password || email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid admin credentials" }, { status: 401 });
  }

  try {
    const token = await createAdminSession(email);
    const response = NextResponse.json({ authenticated: true });
    response.cookies.set(COOKIE_NAME, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: SESSION_TTL_SECONDS });
    return response;
  } catch {
    return Response.json({ error: "Admin authentication is not configured" }, { status: 503 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(COOKIE_NAME, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
