import nexiosInstance from "@/config/nexios.config";
import { IAuthResponse } from "@/types";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile, account }) {
      try {
        if (!profile || !account) {
          return false;
        }
        if (account?.provider == "google") {
          const { data }: IAuthResponse = await nexiosInstance.post(
            "/auth/login",
            {
              name: profile?.name,
              email: profile?.email,
              img: profile?.picture,
            }
          );
          if (data?.data?.accessToken || data?.data?.refreshToken) {
            (await cookies()).set("accessToken", data?.data?.accessToken);
            (await cookies()).set("refreshToken", data?.data?.refreshToken);
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },

  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
