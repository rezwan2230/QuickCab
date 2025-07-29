
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "./utils/jwt.helpers";

type Role = keyof typeof roleBaseRoutes;

const AuthRoutes = ["/login", "/register"];

const roleBaseRoutes = {
  USER: [/^\/dashboard/],
  ADMIN: [/^\/admin-dashboard/],
  DRIVER: [/^\/driver-dashboard/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = (await cookies()).get("accessToken")?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  const user = await jwtVerify(accessToken);
  if (user?.role && roleBaseRoutes[user?.role as Role]) {
    const routes = roleBaseRoutes[user?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
    "/driver-dashboard/:path*",
  ],
};
