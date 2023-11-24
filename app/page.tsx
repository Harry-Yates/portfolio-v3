import { getProjects as fetchProjects } from "@/app/sanity/sanity-utils";
import Links from "./components/Links";
import VideoCard from "./components/VideoCard";
import Head from "next/head";

export const metadata = {
  title: "Harry Yates | Fullstack Developer",
  description: "Portfolio",
};

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-5xl px-8 md:px-16 lg:px-8">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <header className="w-full mx-auto flex flex-col justify-between items-start">
        <h1 className=" font-medium inline mt-20">Harry Yates</h1>
        <p className=" font-light mt-4 mb-8 w-[205px]">
          I am a Fullstack Developer focusing on JavaScript, TypeScript and
          React.
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
      <footer className="pt-20 pb-2">
        <Links />
      </footer>
    </div>
  );
}
