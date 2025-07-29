"use client";

import { NavbarWrapper } from "../../components/dashboardNavbar/dashboardNavbar";


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};

export default AdminLayout;
