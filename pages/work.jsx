import { useEffect } from "react";

import Head from "next/head";

import ProjectCard from "@/components/ProjectCard";

export default function Wok() {
  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c These are some of my notable projects I worked on. 🍾\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 md:-mb-40 lg:mb-0 lg:px-32 mx-auto max-w-[95rem]">
      <Head>
        <title>work ✦ Fahad Alam</title>
        <link rel="icon" href="/hero.jpg" />
      </Head>
      <main className="min-h-screen max-w-screen">
        <div className="pt-20 flex flex-col items-center mx-auto w-full max-w-xl sm:max-w-2xl md:max-w-4xl">
          <h2
            className={
              "selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent mx-auto text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold"
            }
          >
            Work
          </h2>
          <p className="mt-6 max-w-lg text-center sm:w-[90%] md:w-[75%] mx-auto text-base sm:text-lg lg:text-xl mb-1 px-2">
            It has been an absolute pleasure to put my heart and soul into these
            projects. While you&apos;re here, browse these projects.
          </p>
          <div className="select-none flex justify-center space-x-2 sm:space-x-3 items-center mt-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className="fill-gray-300 rotate-180"
            >
              {/* ...svg path unchanged */}
            </svg>
            <p className="text-[#000] dark:text-[#fff] text-lg">✦</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className="fill-gray-300 -rotate-0 -scale-y-100"
            >
              {/* ...svg path unchanged */}
            </svg>
          </div>
        </div>
        <div className="mt-16 mb-16 sm:mt-20 sm:mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
  
}
