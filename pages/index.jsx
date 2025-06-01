import Head from "next/head";
import Work from "@/pages/work";
import About from "@/pages/about";
import Tech from "@/pages/tech";
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wyatt Watson | Freelancer | Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Wyatt Watson, a Web developer skilled in React, Next.js, Tailwind CSS, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Wyatt Watson , Website Developer, React Developer, Next.js, Tailwind CSS, Web Developer Portfolio"
        />
        <meta name="author" content="Wyatt Watson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Wyatt Watson | Website Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the projects and skills of Wyatt Watson, a passionate Website developer from SMIT."
        />
        <meta property="og:image" content="/hero.jpg" />
        <meta property="og:url" content="https://wyattwatson.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wyatt Watson | Web Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Check out Wyatt Watson's web development portfolio showcasing projects in React, Next.js, and more."
        />
        <meta name="twitter:image" content="/hero.jpg" />

        <link rel="icon" href="/hero.jpg" />
        <link rel="canonical" href="https://wyattwatson.vercel.app" />
      </Head>
      <About/>
      <Tech />
      <Work />
      <Contact/>
    </>
  );
}
