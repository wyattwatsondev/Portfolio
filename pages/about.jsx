import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import CategoryCard from "@/components/CategoryCard";

import Hero from "@/public/hero.jpg";
import Rocket from "@/public/Rocket.svg";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log(
      "%c A brief intro about myself. Well, a little brag about myself. 🐼",
      "color: #fff; background: #8000ff; padding: 5px 0;"
    );
  }, []);

  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 mb-16 mx-auto max-w-[80rem]">
      <Head>
        <title>about ✦ Wyatt Watson</title>
        <link rel="icon" href="/hero.jpg" />
      </Head>

      <main className="max-w-screen">
        <div className="mx-auto pt-16 max-w-7xl flex flex-col items-center">
          <h1 className="mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-yellow-500 via-red-400/90 to-blue-500 bg-clip-text text-transparent text-center">
            Meet Wyatt Watson
          </h1>

          <div className="transition-all duration-1000 ease-in-out mb-6">
            <Image
              src={Hero}
              height={200}
              width={130}
              className="select-none h-40 w-40 sm:h-44 sm:w-44 rounded-full shadow-lg"
              alt="Wyatt Watson"
              priority
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300 max-w-xl mb-6 leading-relaxed">
            Hey there! 👋 I'm <strong>Wyatt Watson</strong> — a passionate full-stack software engineer
            with a flair for crafting clean, modern, and intuitive web experiences. From frontend animations to backend APIs,
            I love building tech that solves real-world problems.
          </p>

          <div className="flex items-center justify-center space-x-2 mb-10 text-gray-400 select-none">
            <ArrowSvg flipped />
            <p className="text-[#000] dark:text-[#fff]">✦</p>
            <ArrowSvg />
          </div>

          <CategoryCard />

          <section className="mt-10 px-4 sm:px-6 md:px-10 text-gray-900 dark:text-white leading-relaxed text-justify">
            <p className="text-base sm:text-lg font-light mb-6">
              I specialize in building high-performing, scalable, and user-friendly applications using the latest technologies in the web stack.
              Whether it's a responsive frontend or a robust backend service, I aim for excellence in everything I ship.
              <span className="inline-flex items-baseline mx-1">
                <Image src={Rocket} alt="Rocket icon" className="w-5 h-5 self-center" />
              </span>
              My design philosophy blends aesthetic minimalism with purposeful function.
            </p>

            <p className="text-base sm:text-lg font-light">
              Outside the code editor, I'm constantly exploring new ideas, contributing to open-source, and sharing what I learn. 
              Let’s build something amazing together!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

// ArrowSvg component
function ArrowSvg({ flipped }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="14"
      fill="currentColor"
      className={`fill-gray-300 ${flipped ? "rotate-180" : "-scale-y-100"}`}
    >
      <path d="M0.466181 9.35938C1.28178 11.6167 3.18858..." />
    </svg>
  );
}
