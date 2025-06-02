import { Button, Text, Title } from "@mantine/core";
import React from "react";

const Hero = () => {
  return (
    <section className="text-center my-4">
      <Title
        order={1}
        className="text-3xl sm:text-4xl font-bold text-[#23c59f] dark:text-[#80edac] mb-4"
      >
        Stay Informed , Stay Ahead
      </Title>
      <Text
        size="lg"
        className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto"
      >
        Your Go-to platform for the latest and most relevant news articles.
      </Text>
      <div className="flex justify-center items-center gap-10 pt-2">
        <Button className="bg-[#23c59f] dark:bg-[#80edac] text-white hover:bg-[#1da88a] dark:hover:bg-[#6ed99a] px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
          Post a News
        </Button>
        <Button className="bg-transparent border-2 border-[#23c59f] dark:border-[#80edac] text-[#23c59f] dark:text-[#80edac] hover:bg-[#23c59f]/10 dark:hover:bg-[#80edac]/10 px-6 py-2 rounded-lg transition-all duration-200">
          Read News
        </Button>
      </div>
    </section>
  );
};

export default Hero;
