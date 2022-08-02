import { FaLaptop } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SiJavascript, SiCss3, SiHtml5, SiTailwindcss } from "react-icons/si";

const Card = ({ project }) => {
     const linkUrl = `/project/${project.name.split(" ").join("-")}`;

     const renderSwtich = (lan) => {
          switch (lan) {
               case "JavaScript":
                    return <SiJavascript />;
               case "CSS":
                    return <SiCss3 />;
               case "HTML":
                    return <SiHtml5 />;
               case "TailwindCSS":
                    return <SiTailwindcss />;
               default:
                    return lan;
          }
     };

     return (
          <Link href={linkUrl}>
               <section className="bg-[#191919] mb-5 rounded p-5 w-full md:w-[430px] min-h-[175px] flex flex-col items-start justify-between cursor-pointer hover:bg-[#424242] transition duration-300 ease-in-out ">
                    <div className="flex items-center justify-start text-[#eaeaea]">
                         <FaLaptop className="mr-1.5" />
                         <h1 className="text-md">
                              {project.name.split(" ").join("-")}
                         </h1>
                    </div>
                    <div>
                         <p className="text-[#A2A2A2] text-md mb-1">
                              {project.description}
                         </p>
                    </div>
                    <ul className="flex items-center justify-start flex-wrap text-[#eaeaea]">
                         {project.techUsed.map((language, i) => (
                              <li
                                   key={i}
                                   className="text-xl mr-2 py-0.5 px-2 rounded mb-1 tracking-widest"
                              >
                                   {renderSwtich(language)}
                              </li>
                         ))}
                    </ul>
               </section>
          </Link>
     );
};

export default Card;
