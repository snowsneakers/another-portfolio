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

     return (
          <section className="container-xl flex justify-center text-[#eaeaea] tracking-tighter md:pb-20">
               <div className="border-[#b1b1b1] py-10 px-5 md:px-0">
                    <h1 className="text-3xl mb-5">Projects</h1>
                    <div className="w-full flex items-center justify-around flex-wrap gap-2">
                         {projects.map((project) => (
                              <Card key={project.id} project={project} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default FeaturedProjects;
