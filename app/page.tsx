import { getProjects as fetchProjects } from "@/app/sanity/sanity-utils";
import Links from "./components/Links";
import VideoCard from "./components/VideoCard";
import Head from "next/head";

export const metadata = {
  title: "Harry Yates | Fullstack Developer",
  description: "Portfolio",
  ogImage:
    "https://cdn.sanity.io/files/ofj891ge/production/7acccd5325763e1df6cc39fde0cef6fa6f365232.png",
};

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-5xl px-8 md:px-16 lg:px-8">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="title"
          content={metadata.title}
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://www.hyates.com/"
        />
        <meta
          property="og:title"
          content={metadata.title}
        />
        <meta
          property="og:description"
          content={metadata.description}
        />
        <meta
          property="og:image"
          content={metadata.ogImage}
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          content="https://www.hyates.com/"
        />
        <meta
          property="twitter:title"
          content={metadata.title}
        />
        <meta
          property="twitter:description"
          content={metadata.description}
        />
        <meta
          property="twitter:image"
          content={metadata.ogImage}
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
