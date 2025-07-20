import NavBar from "@/components/Shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Cab",
  description: "Next level ride sharing service",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  );
}
