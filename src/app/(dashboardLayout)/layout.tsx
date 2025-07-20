import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Quick Cab",
  description: "Next level ride sharing service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
     <p className="text-4xl">Dashboard common navbar</p>
      {children}
    </div>
  );
}
