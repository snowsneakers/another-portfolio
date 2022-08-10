import { useRouter } from "next/router";
import { FaGithub, FaExternalLinkAlt, FaNode } from "react-icons/fa";
import {
     SiJavascript,
     SiCss3,
     SiHtml5,
     SiTailwindcss,
     SiReact,
     SiNextdotjs,
} from "react-icons/si";
import Head from "next/head";
import Card from "./Card";
import Image from "next/image";

export default function Project({ projects }) {
     const router = useRouter();
     const { id } = router.query;
     const soloProject = projects.repo.filter(
          (repo) => repo.name === id.split("-").join(" ")
     );

     console.log(projects.repo.map((x) => x.image));

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
               case "React":
                    return <SiReact />;
               case "node":
                    return <FaNode />;
               case "Next":
                    return <SiNextdotjs />;
               default:
                    return lan;
          }
     };

     return (
          <section className="container-xl flex items-center justify-center flex-col text-black dark:text-[#eaeaea] tracking-tighter px-5 md:px-0">
               <Head>
                    <title>{id}</title>
                    <meta charSet="utf-8" />
                    <meta
                         name="viewport"
                         content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                         property="og:title"
                         content="Check Out My Portfolio!"
                    />
               </Head>
               {soloProject.map((project) => {
                    const {
                         blurb,
                         blurbConclusion,
                         githubLink,
                         liveLink,
                         image,
                         name,
                         techUsed,
                         description,
                    } = project;
                    return (
                         <section key={project.id} className="my-10">
                              <div className="border-b border-dashed pb-5 mb-10">
                                   <h1 className="text-3xl mb-3 capitalize">
                                        {name}
                                   </h1>
                                   <p className="text-md md:text-lg text-black dark:text-[#b1b1b1] mb-3">
                                        {description}
                                   </p>
                                   <ul className="flex items-center justify-start text-black dark:text-[#eaeaea]">
                                        {project.techUsed.map((language, i) => (
                                             <li
                                                  key={i}
                                                  className="text-xl mr-2 py-0.5 px-2 rounded tracking-widest"
                                             >
                                                  {renderSwtich(language)}
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                              <section className="border-b border-dashed pb-5">
                                   <div className="flex items-center justify-center mb-10 relative">
                                        {/* <img
                                             src={image.src || image}
                                             alt=""
                                             className="mx-auto"
                                        /> */}
                                        <Image
                                             src={image.src || image}
                                             alt="project preview"
                                             width={image.width || 880}
                                             height={image.height || 495}
                                             blurDataURL={image.src || image}
                                             placeholder="blur"
                                             className="rounded"
                                        />
                                   </div>
                                   <div className="pb-5">
                                        <p className="mb-3">{blurb}</p>
                                        <p className="mb-3">
                                             {blurbConclusion}
                                        </p>
                                        <div className="flex item-center justify-start">
                                             <a
                                                  href={project.githubLink}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="font-medium flex items-center justify-center py-0.5 px-1 rounded mr-1 text-sm bg-gray-200 dark:bg-[#2A2A2A] hover:bg-gray-300 dark:hover:bg-[#424242] tracking-wide"
                                             >
                                                  Github{" "}
                                                  <FaGithub className="ml-1" />
                                             </a>
                                             <a
                                                  href={project.liveLink}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="font-medium flex items-center justify-center py-0.5 px-1 rounded text-sm bg-gray-200 dark:bg-[#2A2A2A] hover:bg-gray-300 dark:hover:bg-[#424242] tracking-wide"
                                             >
                                                  Live{" "}
                                                  <FaExternalLinkAlt className="ml-1" />
                                             </a>
                                        </div>
                                   </div>
                              </section>
                              <section className="mt-10">
                                   <h2 className="text-3xl mb-5">
                                        More Projects
                                   </h2>
                                   <div className="flex items-center justify-around flex-wrap gap-2">
                                        {projects.repo
                                             .filter(
                                                  (project) =>
                                                       project.name
                                                            .split(" ")
                                                            .join("-") !== id
                                             )
                                             .map((project) => (
                                                  <Card
                                                       key={project.id}
                                                       project={project}
                                                  />
                                             ))}
                                   </div>
                              </section>
                         </section>
                    );
               })}
          </section>
     );
}
