import { useEffect, useState } from "react";
import Link from "next/link";

import LinkedIn from "../public/icons/linkedin@2x.png";
import Discord from "../public/icons/discord.jpg";
import X from "../public/icons/x.webp";
import FB from "../public/icons/fb.jpg";
import Instagram from "../public/icons/instagram@2x.png";
import Gmail from "../public/icons/google@2x.png";
import Image from "next/image";

const Footer = () => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Fahad12405/Fahadalamportfolio"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const data = await response.json();
        setMetaData({
          star: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    getData();
  }, []);

  const iconClass = "relative w-[30px] h-[30px]";

  return (
    <div className="flex select-none text-sm py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link href="https://www.linkedin.com/in/" target="blank">
          <div className={iconClass}>
            <Image src={LinkedIn} alt="linkedin" fill style={{ objectFit: "contain" }} />
          </div>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61554196937436&sk=friends" target="blank">
          <div className={iconClass}>
            <Image src={FB} alt="facebook" fill style={{ objectFit: "contain" }} />
          </div>
        </Link>
        <a href="https://www.instagram.com/wyattwatson.dev/" target="blank">
          <div className={iconClass}>
            <Image src={Instagram} alt="instagram" fill style={{ objectFit: "contain" }} />
          </div>
        </a>
        <Link href="mailto:wyattwatson.dev@gmail.com" target="blank" rel="noreferrer">
          <div className={iconClass}>
            <Image src={Gmail} alt="gmail" fill style={{ objectFit: "contain" }} />
          </div>
        </Link>
        <Link href="https://discord.com/channels/@me" target="blank" rel="noreferrer">
          <div className={iconClass}>
            <Image src={Discord} alt="discord" fill style={{ objectFit: "contain" }} />
          </div>
        </Link>
        <Link href="https://x.com/watson_wya57712" target="blank" rel="noreferrer">
          <div className={iconClass}>
            <Image src={X} alt="x" fill style={{ objectFit: "contain" }} />
          </div>
        </Link>
      </div>

      <a
        href="#"
        target="blank"
        rel="noreferrer"
        className="flex flex-col text-center group hover:text-purple-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 font-syne"
      >
        <div
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="relative transition-all ease-in-out duration-1000"
        >
          <p
            className={`${
              isHovering && "scale-150 blur-[6px]"
            } group font-bold animate-text duration-700 transition-all linear  group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg`}
          >
Wyatt Watson          </p>
         
        </div>
       
      </a>
    </div>
  );
};

export default Footer;
