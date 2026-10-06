import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, verifyAdminSession } from "@/lib/admin-auth";

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin/login" || request.nextUrl.pathname === "/api/admin/auth") return NextResponse.next();
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const authenticated = await verifyAdminSession(token);
  if (authenticated) return NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/api/admin")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
