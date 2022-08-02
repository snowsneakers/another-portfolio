import { useRouter } from "next/router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiJavascript, SiCss3, SiHtml5, SiTailwindcss } from "react-icons/si";
import Head from "next/head";
import { render } from "react-dom";

export default function Project({ projects }) {
     const router = useRouter();
     const { id } = router.query;
     const soloProject = projects.repo.filter(
          (repo) => repo.name === id.split("-").join(" ")
     );

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
          <section className="container-xl flex items-center justify-center flex-col text-[#eaeaea] font-robotoMono tracking-tighter px-5 md:px-0">
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
                         id,
                         image,
                         name,
                         techUsed,
                         description,
                    } = project;
                    return (
                         <section
                              key={id}
                              className="my-10 md:my-20 w-full md:w-[880px]"
                         >
                              <div className="w-full md:w-[880px] border-b border-dashed pb-5 mb-10">
                                   <h1 className="text-3xl mb-3 capitalize">
                                        {name}
                                   </h1>
                                   <p className="text-md md:text-lg text-[#b1b1b1] mb-3">
                                        {description}
                                   </p>
                                   <ul className="flex items-center justify-start text-[#eaeaea]">
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
                              <div className="mb-10">
                                   <img
                                        src={image}
                                        alt=""
                                        className="mx-auto"
                                   />
                              </div>
                              <div className="w-full md:w-[800px] mx-auto">
                                   <p className="mb-3">{blurb}</p>
                                   <p className="mb-3">{blurbConclusion}</p>
                                   <div className="flex item-center justify-start">
                                        <a
                                             href={project.githubLink}
                                             target="_blank"
                                             rel="noreferrer"
                                             className="flex items-center justify-center py-0.5 px-1 rounded mr-1 text-sm bg-[#2A2A2A] hover:bg-[#424242] tracking-widest"
                                        >
                                             Github{" "}
                                             <FaGithub className="ml-1" />
                                        </a>
                                        <a
                                             href={project.liveLink}
                                             target="_blank"
                                             rel="noreferrer"
                                             className="flex items-center justify-center py-0.5 px-1 rounded text-sm bg-[#2A2A2A] hover:bg-[#424242] tracking-widest"
                                        >
                                             Live{" "}
                                             <FaExternalLinkAlt className="ml-1" />
                                        </a>
                                   </div>
                              </div>
                         </section>
                    );
               })}
          </section>
     );
}
