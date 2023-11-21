"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/app/sanity/sanity-utils";
import { Project } from "@/app/types/Project";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      console.log(projectsData);
      setProjects(projectsData);
    }

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#F7F7F7]">
      <header className="w-full max-w-4xl mx-auto flex flex-col justify-between items-start pt-12 pb-12 text-sm">
        <h1 className=" font-medium inline mt-20">Harry Yates</h1>
        <p className=" font-light mt-4 mb-8 w-1/4">
          I am a Fullstack Developer focusing on React and Typescript.
        </p>
        <div className="flex flex-col items-start w-1/4 text-black-600 underline underline-gray leading-5 font-normal text-sm">
          <a
            className="hover:underline-bold "
            href="#">
            Email
          </a>
          <a
            className="hover:underline-bold "
            href="#">
            CV
          </a>
          <a
            className="hover:underline-bold "
            href="#">
            GitHub
          </a>
          <a
            className="hover:underline-bold "
            href="#">
            LinkedIn
          </a>
        </div>
      </header>
      <main className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="grid grid-cols-1 gap-4">
            <div className="group bg-transparent rounded-lg transform transition duration-500 hover:cursor-pointer">
              <div className="shadow-md transition-shadow duration-100 group-hover:shadow-lg ">
                <video
                  className="w-full rounded-t-lg"
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  preload="none"
                />
              </div>
              <div className="py-3 border-b-2 border-gray-200 pb-10">
                <p className="font-medium text-sm mb-2">{project.name}</p>
                <p className="text-gray-700 text-sm  w-3/4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam, itaque beatae. Aperiam ipsum quas vel? Deleniti nobis,
                  quam tempore possimus deserunt laborum quasi sunt.
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
