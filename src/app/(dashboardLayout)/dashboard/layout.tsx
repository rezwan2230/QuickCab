import type { Metadata } from "next";
import UserLayout from "./layout/userLayout";

export const metadata: Metadata = {
  title: "Dashboard - Quick Cab",
  description: "Next level ride sharing service",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  );
}
