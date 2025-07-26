/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtVerify as joseJwtVerify, JWTPayload } from "jose";


interface CustomJWTPayload extends JWTPayload {
  email: string;
  role: string;
  _id: string;
  iat?: number;
  exp?: number;
}

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_ACCESS_SECRET as string
);
export const jwtVerify = async (token: string): Promise<CustomJWTPayload | null> => {
  try {
    const { payload } = await joseJwtVerify(token, SECRET_KEY);
     return payload as CustomJWTPayload;
  } catch (error: any) {
    console.log("JWT Verification Error:", error);
    return null;
  }
};
