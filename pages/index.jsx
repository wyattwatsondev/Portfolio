import Head from "next/head";
import Work from "@/pages/work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wyatt Watson | Freelancer | Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Fahad Alam, a frontend developer skilled in React, Next.js, Tailwind CSS, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Fahad Alam, Frontend Developer, React Developer, Next.js, Tailwind CSS, Web Developer Portfolio"
        />
        <meta name="author" content="Fahad Alam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Fahad Alam | Frontend Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the projects and skills of Fahad Alam, a passionate frontend developer from SMIT."
        />
        <meta property="og:image" content="/hero.jpg" />
        <meta property="og:url" content="https://fahadalam.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fahad Alam | Frontend Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Check out Fahad Alam's web development portfolio showcasing projects in React, Next.js, and more."
        />
        <meta name="twitter:image" content="/hero.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/hero.jpg" />
        <link rel="canonical" href="https://fahadalam.vercel.app" />
      </Head>

      {/* Sirf Work component dikhaya ja raha hai */}
      <Work />
    </>
  );
}
