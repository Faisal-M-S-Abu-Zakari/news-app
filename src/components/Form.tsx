"use client";
import { Button, Card, Text, TextInput, Textarea, Title } from "@mantine/core";
import { Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <Card
      withBorder
      shadow="md"
      radius="md"
      className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl" // Increased max width
    >
      <div className="p-6">
        <Title
          order={2}
          className="text-xl text-gray-800 dark:text-gray-100 mb-2"
        >
          Contact Us
        </Title>
        <Text size="sm" className="text-gray-600 dark:text-gray-300 mb-6">
          Send us a message, and we'll get back to you soon.
        </Text>

        <form className="space-y-4">
          {/* Name field */}
          <div className="space-y-1">
            <Text
              size="sm"
              fw={500}
              className="text-gray-700 dark:text-gray-200 flex items-center gap-2 p-3"
            >
              <User
                size={16} // Slightly smaller for better balance with label
                className="text-blue-500 dark:text-blue-400"
              />
              Full Name
            </Text>
            <TextInput
              id="name"
              placeholder="Your full name"
              classNames={{
                input:
                  "w-full border-2 border-blue-200 dark:border-blue-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-md pl-12 transition-all duration-200 p-2",
                wrapper: "w-full",
              }}
              radius="md"
              size="md"
              required
            />
          </div>

          {/* Email field */}
          <div className="space-y-1">
            <Text
              size="sm"
              fw={500}
              className="text-gray-700 dark:text-gray-200 flex items-center gap-2 p-3"
            >
              <Mail size={16} className="text-blue-500 dark:text-blue-400" />
              Email Address
            </Text>
            <TextInput
              id="email"
              type="email"
              placeholder="Your email"
              classNames={{
                input:
                  "w-full border-2 border-blue-200 dark:border-blue-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-md pl-12 transition-all duration-200 p-2",
                wrapper: "w-full",
              }}
              radius="md"
              size="md"
              required
            />
          </div>

          {/* Message field */}
          <div className="space-y-1">
            <Text
              size="sm"
              fw={500}
              className="text-gray-700 dark:text-gray-200 flex items-center gap-2 p-3"
            >
              <MessageSquare
                size={16}
                className="text-blue-500 dark:text-blue-400"
              />
              Your Message
            </Text>
            <Textarea
              id="message"
              placeholder="Your message"
              minRows={4}
              classNames={{
                input:
                  "w-full border-2 border-blue-200 dark:border-blue-600 dark:bg-gray-700 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-md pl-12 transition-all duration-200 p-2",
                wrapper: "w-full",
              }}
              radius="md"
              size="md"
              required
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            radius="md"
            size="md"
            className="bg-blue-500 p-2 hover:bg-blue-600 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
