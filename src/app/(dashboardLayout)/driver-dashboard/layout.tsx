import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver_Dashboard - Quick Cab",
  description: "Next level ride sharing service",
};

export default function DriverDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
   <div>
    Driver Dashboard Sidebar
    {children}</div>

  );
}
