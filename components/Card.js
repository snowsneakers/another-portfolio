import { FaLaptop } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const Card = ({ project }) => {
     const linkUrl = `/project/${project.name.split(" ").join("-")}`;

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
                                   className="text-[.75rem] mr-2 bg-[#383838] py-0.5 px-2 rounded mb-1 tracking-widest"
                              >
                                   {language}
                              </li>
                         ))}
                    </ul>
               </section>
          </Link>
     );
};

export default Card;
