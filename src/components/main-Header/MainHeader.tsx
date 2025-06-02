import React from "react";
import { Text } from "@mantine/core";
import NavBar from "./NavBar";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
const MainHeader = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"} className="flex justify-baseline items-center gap-3">
          <Image src={logo} alt="logo" height={30} width={30} />
          <Text
            size="xl"
            fw={700}
            className="text-[#23c59f] dark:text-[#80edac] tracking-tight"
          >
            GSG NEWS
          </Text>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default MainHeader;
