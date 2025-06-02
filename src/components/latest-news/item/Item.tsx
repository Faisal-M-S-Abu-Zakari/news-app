import React from "react";
import { Card, Text, Button, Group } from "@mantine/core";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Item {
  title: string;
  image: string | StaticImageData;
  description: string;
  href: string;
}

const Item = (props: Item) => {
  const { title, image, description, href } = props;
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-200 p-3 py-5 border-1 border-gray-200 dark:border-gray-700"
    >
      <Image
        src={image}
        height={160}
        alt={title}
        className="object-cover pb-1"
      />

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} className="text-gray-800 dark:text-gray-100 py-2">
          {title}
        </Text>
      </Group>

      <Text
        size="sm"
        className="text-gray-600 dark:text-gray-300 mb-4 h-[50px]"
      >
        {description.slice(0, 50)}...
      </Text>

      <Button
        component={Link}
        href={href}
        color="blue"
        fullWidth
        radius="md"
        className="bg-transparent border-2 border-[#23c59f] dark:border-[#80edac] text-[#23c59f] dark:text-[#80edac] hover:bg-[#23c59f]/10 dark:hover:bg-[#80edac]/10 px-6 py-2 rounded-lg transition-all duration-200"
      >
        Read More
      </Button>
    </Card>
  );
};

export default Item;
