import Project from "../../components/Project";
import Header from "../../components/Header";
import { projects } from "../../data/projects";

export default function soloProject(repo) {
     // console.log(repo);
     return (
          <>
               <Header />
               <Project projects={repo} />
          </>
     );
}

export async function getStaticProps() {
     // const res = await fetch(
     //      "https://portfolio-two-five.vercel.app/api/projects"
     // );
     // const data = await res.json();

     return {
          props: { repo: projects },
     };
}

export async function getStaticPaths() {
     // const res = await fetch(
     //      "https://portfolio-two-five.vercel.app/api/projects"
     // );
     // const data = await res.json();

     const paths = projects.map((repo) => {
          return { params: { id: repo.name.split(" ").join("-") } };
     });

     return {
          paths,
          fallback: false,
     };
}
