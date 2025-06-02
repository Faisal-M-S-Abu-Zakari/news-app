"use client";
import { NavLink, Group } from "@mantine/core";
import React from "react";
import { usePathname } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

const Reachlayout = ({ children }: IProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside
          className="
             hidden
          lg:block w-full lg:w-64 bg-white dark:bg-gray-800 rounded-md shadow-md p-4 transition-all duration-300"
        >
          <Group gap="xs" className="flex-col">
            <NavLink
              href="/reach/about"
              label="About"
              active={pathname === "/reach/about"}
              classNames={{
                root: "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 data-[active=true]:text-blue-500 dark:data-[active=true]:text-blue-400 transition-colors duration-200 rounded-md px-2 py-1",
                label: "text-sm font-medium",
              }}
            />
            <NavLink
              href="/reach/contact"
              label="Contact"
              active={pathname === "/reach/contact"}
              classNames={{
                root: "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 data-[active=true]:text-blue-500 dark:data-[active=true]:text-blue-400 transition-colors duration-200 rounded-md px-2 py-1",
                label: "text-sm font-medium",
              }}
            />
          </Group>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Reachlayout;
