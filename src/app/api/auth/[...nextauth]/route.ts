import { authOptions } from "@/config/nextAuth.config";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
