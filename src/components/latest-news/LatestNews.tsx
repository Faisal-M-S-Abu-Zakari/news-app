import React from "react";

import { Title, Button } from "@mantine/core";
import Link from "next/link";
import Item from "./item/Item";
import { newsItems } from "@/constant/latestNews";

const LatestNews = () => {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <Title order={2} className="text-xl text-gray-800 dark:text-gray-100">
          Latest News
        </Title>
        <Button
          component={Link}
          href="/news"
          variant="outline"
          color="blue"
          radius="md"
          className=" text-[#23c59f] dark:text-[#80edac]     transition-all duration-200"
        >
          View All News
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
