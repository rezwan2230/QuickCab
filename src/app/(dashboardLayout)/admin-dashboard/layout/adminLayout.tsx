"use client";

import { NavbarWrapper } from "../../components/dashboardNavbar/dashboardNavbar";
import { AdminSidebarWrapper } from "../../components/sidebar/adminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};

export default AdminLayout;
