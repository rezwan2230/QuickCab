"use client";

import { NavbarWrapper } from "../../components/dashboardNavbar/dashboardNavbar";
import { SidebarWrapper } from "../../components/sidebar/userSidebar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <SidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};

export default UserLayout;
