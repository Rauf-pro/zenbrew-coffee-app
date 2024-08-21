"use client";

import Hero from "@/components/Hero";

const Home = () => {
  // add locomotive scroll
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      {/* temporary div */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
