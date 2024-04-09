import React from "react";
import Sidebar from "./_components/Sidebar";
import SideNav from "./_components/SideNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <SideNav />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[11vh] h-full">{children}</main>
    </div>
  );
};

export default layout;
