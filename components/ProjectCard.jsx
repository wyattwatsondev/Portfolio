import Image from "next/image";
import Link from "next/link";

import Usptotrademarkrevive from "@/public/work/usptotrademarkrevive.png";
import kamui from "@/public/work/kamui.jpg";
import Glamishbeauty from "@/public/work/glamishbeauty.png";
import Trademarkgov from "@/public/work/trademarkgov.jpg";
import Globaltradingcars from "@/public/work/globaltradingcars.jpg";

import CRM from "@/public/work/crm.jpg";

const ProjectCard = () => {
  const data = [


    {
      id: 3,
      image: Glamishbeauty,
      title: "E-commerce",
      link: "https://glamish-beauty.vercel.app/",
      target: "_self",
    },
    {
      id: 1,
      image: Usptotrademarkrevive,
      title: "Trademark Registration",
      link: "https://usptotrademarkrevive.com/",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "Real State ",
      link: "https://fahad12405.github.io/Real-State-website/",
      target: "_self",
    },
    {
      id: 4,
      image: Trademarkgov,
      title: "Trademark USA",
      link: "https://trademark-five.vercel.app/",
      target: "_blank",
    },
    {
      id: 5,
      image: Globaltradingcars,
      title: "Japan Car Export",
      link: "https://globaltradingcars.vercel.app/",
      target: "_self",
    },
    {
      id: 6,
      image: CRM,
      title: "CRM Dashboard",
      link: "https://vehwarecrm.vercel.app/",
      target: "_blank",
    },
    
    

  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg  flex flex-col items-center  p-4  w-[280px] mx-auto"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                    ? alert("Ash Ketchum asked you to open in desktop browser.. 🚀")
                    : "";
              }}
            >
              <div className="w-full h-[180px] overflow-hidden rounded-lg">
                <Image
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  width={260}
                  height={180}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110 rounded-lg"
                />
              </div>
            </Link>

            <div className="flex flex-col items-center mt-4">
              <h1 className="font-semibold text-[1.5rem] text-gray-700 dark:text-white text-center">
                {project.title}
              </h1>
              <p className="text-gray-400 font-light text-center text-sm max-w-[90%] mt-2">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

};

export default ProjectCard;
