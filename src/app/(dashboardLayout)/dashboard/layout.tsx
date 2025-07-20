import type { Metadata } from "next";

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
    User Dashboard Sidebar
    {children}</div>

  );
}
