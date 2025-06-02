import Hero from "@/components/hero/Hero";
import LatestNews from "@/components/latest-news/LatestNews";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <Hero />

        {/* Latest News Section */}
        <LatestNews />
      </div>
    </div>
  );
}
