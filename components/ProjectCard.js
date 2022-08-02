import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
     return (
          <section key={project.id} className="my-20 w-[880px]">
               <div>
                    <img src="" alt="" className="mx-auto" />
               </div>
               <div className="mx-auto mt-5">
                    <h2 className="text-3xl capitalize mb-3">{project.name}</h2>
                    {/* <p>{project.about}</p>
            <p>{project.lessonsLearned}</p>
            <p>{project.techUsedBlurb}</p>
            <p>{project.techUsed.join(', ')}</p> */}
                    <p className="text-md mb-3">{project.blurb}</p>
                    <p className="text-md mb-3">{project.blurbConclusion}</p>
                    <div className="flex item-center justify-start">
                         <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center py-0.5 px-1 rounded mr-1 text-sm bg-[#2A2A2A] hover:bg-[#424242]"
                         >
                              Github <FaGithub className="ml-1" />
                         </a>
                         <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center py-0.5 px-1 rounded text-sm bg-[#2A2A2A] hover:bg-[#424242]"
                         >
                              Live <FaExternalLinkAlt className="ml-1" />
                         </a>
                    </div>
               </div>
          </section>
     );
};

export default ProjectCard;
