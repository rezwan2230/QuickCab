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
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const ROLES = {
    ADMIN: "admin",
    DRIVER: "driver",
    USER: "user",
  };

  //role base authorization
  let decodedToken = null;
  decodedToken = await jwtVerify(accessToken);
  if (decodedToken) {
    const { email, role, _id } = decodedToken;
    console.log("🚀 ~ middleware ~ _id:", _id);
    console.log("🚀 ~ middleware ~ role:", role);
    console.log("🚀 ~ middleware ~ email:", email);
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
