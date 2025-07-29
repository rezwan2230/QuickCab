import type { Metadata } from "next";
import AdminLayout from "./layout/adminLayout";

export const metadata: Metadata = {
  title: "Admin_Dashboard - Quick Cab",
  description: "Next level ride sharing service",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
