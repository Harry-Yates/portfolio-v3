import { getProjects as fetchProjects } from "@/app/sanity/sanity-utils";
import Links from "./components/Links";
import VideoCard from "./components/VideoCard";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Harry Yates | Fullstack Developer",
  description: "Portfolio",
};

export default async function Home() {
  const projects = await fetchProjects();
  const isProd = process.env.NODE_ENV === "production";
  const ogImageUrl = isProd
    ? "https://harryyates.co.uk/opengraph-image.jpg"
    : "http://localhost:3000/opengraph-image.jpg";

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-5xl px-8 md:px-16 lg:px-8">
      <Head>
        <meta
          property="og:image"
          content={ogImageUrl}
        />
        <meta
          property="og:image:type"
          content="image/jpeg"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="630"
        />
        <meta
          name="twitter:image"
          content={ogImageUrl}
        />
        <meta
          name="twitter:image:type"
          content="image/jpeg"
        />
        <meta
          name="twitter:image:width"
          content="1200"
        />
        <meta
          name="twitter:image:height"
          content="630"
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
      <main className="w-full  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {projects.map((project) => (
          <VideoCard
            key={project._id}
            project={project}
          />
        ))}
      </main>
      <footer className="pt-20 pb-2">
        <Links />
      </footer>
    </div>
  );
}
