import Card from "./Card";
import { useState, useEffect } from "react";
import { projects } from "../data/projects";

const FeaturedProjects = () => {
     // const [projects, setProjects] = useState([]);

     // const getProjects = async () => {
     //      const res = await fetch(
     //           "https://portfolio-two-five.vercel.app/api/projects"
     //      );
     //      const data = await res.json();
     //      setProjects(data);
     // };

     // useEffect(() => {
     //      getProjects();
     // }, []);
     // // console.log(projects.data)

     const [projectAmount, setProjectAmount] = useState(4);

     const showMoreProjects = () => {
          setProjectAmount((prevState) => prevState + 4);
     };

     const showLessProjects = () => {
          setProjectAmount((prevState) => prevState - 4);
     };

     return (
          <section className="container-xl flex justify-center text-black dark:text-[#eaeaea] tracking-tighter md:pb-20">
               <div className="border-[#b1b1b1] py-10 px-5 md:px-0">
                    <h1 className="text-3xl mb-5">Projects</h1>
                    <div className="w-full flex items-center justify-around flex-wrap gap-2">
                         {projects
                              .filter((project, index) => index < projectAmount)
                              .map((project) => (
                                   <Card key={project.id} project={project} />
                              ))}
                    </div>
                         <div className="flex items-center justify-center">
                              <button
                                   className="bg-gray-200 dark:bg-[#2A2A2A] hover:bg-gray-300 dark:hover:bg-[#424242] text transition duration-300 ease-in-out rounded px-2 py-0.5 text-md md:text-sm font-medium text-black dark:text-[#b1b1b1]"
                                   onClick={projectAmount >= 7 ? showLessProjects : showMoreProjects}
                              >
                                   {projectAmount >= 7 ? "Show Less" : "Show More"}
                              </button>
                         </div>
               </div>
          </section>
     );
};

export default FeaturedProjects;
