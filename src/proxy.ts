import { NextResponse, type NextRequest } from "next/server";
import { getSession } from "@/lib/auth";

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const session = await getSession();

  if (path === "/dashboard") {
    if (!session) return NextResponse.redirect(new URL("/login", request.url));
    if (session.role !== "participant") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  if ((path === "/login" || path === "/register") && session) {
    const destination = session.role === "admin" ? "/admin" : "/dashboard";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login", "/register"],
};
