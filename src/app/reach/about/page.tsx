import React from "react";
import { Button, Text, Title } from "@mantine/core";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Title
            order={1}
            className="text-3xl sm:text-4xl font-bold text-[#f65533] dark:text-[#ff7f50] mb-4"
          >
            About Us
          </Title>
          <Text
            size="lg"
            className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto"
          >
            Welcome to our first Next.js project, where we bring innovation and
            passion to create exceptional web experiences.
          </Text>
        </section>

        {/* Mission Section */}
        <section className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 mb-8">
          <Title
            order={2}
            className="text-xl text-gray-800 dark:text-gray-100 mb-4"
          >
            Our Mission
          </Title>
          <Text className="text-gray-600 dark:text-gray-300 mb-4">
            Our mission is to empower users with seamless, modern, and
            accessible web solutions. We strive to combine cutting-edge
            technology with user-centric design to deliver outstanding digital
            experiences.
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            We are committed to innovation, collaboration, and excellence,
            ensuring every project we undertake reflects our dedication to
            quality and creativity.
          </Text>
        </section>

        {/* Team Section */}
        <section className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 mb-8">
          <Title
            order={2}
            className="text-xl text-gray-800 dark:text-gray-100 mb-4"
          >
            Our Team
          </Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                FZ
              </div>
              <div>
                <Text className="text-gray-800 dark:text-gray-100 font-medium">
                  Faisal Abu Zakari
                </Text>
                <Text className="text-sm text-gray-600 dark:text-gray-300">
                  Lead Developer
                </Text>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                NZ
              </div>
              <div>
                <Text className="text-gray-800 dark:text-gray-100 font-medium">
                  Noor Abu Zakari
                </Text>
                <Text className="text-sm text-gray-600 dark:text-gray-300">
                  UI/UX Designer
                </Text>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Title
            order={2}
            className="text-xl text-gray-800 dark:text-gray-100 mb-4"
          >
            Get in Touch
          </Title>
          <Text className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Have questions or want to collaborate? Reach out to us through our
            contact page.
          </Text>
          <Button
            component={Link}
            href="/contact"
            size="md"
            radius="md"
            className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 p-3"
          >
            Contact Us
          </Button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
