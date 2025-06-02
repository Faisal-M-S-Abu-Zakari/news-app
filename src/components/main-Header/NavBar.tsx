"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NavLink } from "@mantine/core";
const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      <NavLink
        href="/"
        label="Home"
        classNames={{
          root: `text-gray-700 dark:text-gray-200 hover:text-[#80edac] dark:hover:text-[#80edac] transition-colors duration-200 ${
            pathname === "/" ? "border-b-2 border-[#23c59f]" : ""
          }`,
          label: "text-sm font-medium",
        }}
      />
      <NavLink
        href="/addNews"
        label="Add News"
        classNames={{
          root: `text-gray-700 dark:text-gray-200 hover:text-[#80edac] dark:hover:text-[#80edac] transition-colors duration-200 ${
            pathname === "/addNews" ? "border-b-2 border-[#23c59f]" : ""
          }`,
          label: "text-sm font-medium",
        }}
      />
      <NavLink
        href="/categories"
        label="Categories"
        classNames={{
          root: `text-gray-700 dark:text-gray-200 hover:text-[#80edac] dark:hover:text-[#80edac] transition-colors duration-200 ${
            pathname.startsWith("/categories")
              ? "border-b-2 border-[#23c59f]"
              : ""
          }`,
          label: "text-sm font-medium",
        }}
      />
      <NavLink
        href="/admin"
        label="Admin"
        classNames={{
          root: `text-gray-700 dark:text-gray-200 hover:text-[#80edac] dark:hover:text-[#80edac] transition-colors duration-200 ${
            pathname === "/admin" ? "border-b-2 border-[#23c59f]" : ""
          }`,
          label: "text-sm font-medium",
        }}
      />
    </nav>
  );
};

export default NavBar;
