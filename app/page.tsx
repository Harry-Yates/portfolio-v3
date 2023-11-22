import { getProjects as fetchProjects } from "@/app/sanity/sanity-utils";
import Links from "./components/Links";
import VideoCard from "./components/VideoCard";

export default async function Home() {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-[#F7F7F7] mx-16 md:mx-6 lg:mx-8 max-w-5xl">
      <header className="w-full mx-auto flex flex-col justify-between items-start">
        <h1 className=" font-medium inline mt-20">Harry Yates</h1>
        <p className=" font-light mt-4 mb-8 w-1/5 w-[205px]">
          I am a Fullstack Developer focusing on React and Typescript.
        </p>
        <Links />
      </header>
      <main className="w-full  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <VideoCard
            key={project._id}
            project={project}></VideoCard>
        ))}
      </main>
      <footer className="pt-20 pb-24">
        <Links />
      </footer>
    </div>
  );
}
