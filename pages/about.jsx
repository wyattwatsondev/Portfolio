import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaLaptopCode,
  FaShopify,
  FaTools,
} from "react-icons/fa";

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
            Hey there! 👋 I&apos;m <strong>Wyatt Watson</strong> — a passionate full-stack software engineer
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
            <p className="text-base sm:text-lg font-light">
              I specialize in building high-performing, scalable, and user-friendly applications using the latest technologies in the web stack.
              Whether it&apos;s a responsive frontend or a robust backend service, I aim for excellence in everything I ship.
              <span className="inline-flex items-baseline mx-1">
                <Image src={Rocket} alt="Rocket icon" className="w-5 h-5 self-center" />
              </span>
              My design philosophy blends aesthetic minimalism with purposeful function.
            </p>

            <p className="text-base sm:text-lg font-light">
              Outside the code editor, I&apos;m constantly exploring new ideas, contributing to open-source, and sharing what I learn. 
              Let&apos;s build something amazing together!
            </p>
          </section>

          {/* ✦ Refined Services Section */}
          <section className="mt-20 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
              ✦ My Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 relative transition hover:shadow-lg"
                >
                  {/* Gradient bar or icon bubble */}
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-xl shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const services = [
  {
    title: "Custom Website Development",
    description:
      "Tailor-made, responsive websites that reflect your brand and goals.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Frontend Engineering",
    description:
      "Modern UIs with React, animations, TailwindCSS, and pixel-perfect layouts.",
    icon: <FaCode />,
  },
  {
    title: "Backend API Development",
    description:
      "Robust APIs using Node.js, Express, or Next.js serverless functions.",
    icon: <FaServer />,
  },
  {
    title: "Performance Optimization",
    description:
      "Speed-focused solutions: lazy loading, SSR, caching, code-splitting.",
    icon: <FaRocket />,
  },
  {
    title: "E-Commerce Integration",
    description:
      "Online store setup with Shopify, Stripe, and headless CMS solutions.",
    icon: <FaShopify />,
  },
  {
    title: "CMS & Blog Setup",
    description:
      "Powerful and flexible CMS integrations like Sanity, Contentful, and more.",
    icon: <FaTools />,
  },
];

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
