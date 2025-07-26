import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "./utils/jwt.helpers";

const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = (await cookies()).get("accessToken")?.value;

  //procting htbrid routes
  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  //role base authorization
  let decodedToken = null;
  decodedToken = await jwtVerify(accessToken);
  console.log(pathname);
  if (decodedToken) {
    const { role } = decodedToken;
    console.log(role);

    if (role == "ADMIN" && pathname.match(/^\/admin-dashboard/)) {
      return NextResponse.next();
    }
    if (role == "DRIVER" && pathname.match(/^\/driver-dashboard/)) {
      return NextResponse.next();
    }
    if (role == "USER" && pathname.match(/^\/dashboard/)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
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
