import Head from "next/head";
import { getProjects as fetchProjects } from "@/app/sanity/sanity-utils";
import Links from "./components/Links";
import VideoCard from "./components/VideoCard";

//cdn.sanity.io/files/ofj891ge/production/7acccd5325763e1df6cc39fde0cef6fa6f365232.png

https: type OGImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type MetadataType = {
  title: string;
  description: string;
  openGraph?: {
    images: OGImage[];
  };
};

export const metadata: MetadataType = {
  title: "Harry Yates | Fullstack Developer",
  description: "Portfolio",
  openGraph: {
    images: [
      {
        url: "https://cdn.sanity.io/files/ofj891ge/production/7acccd5325763e1df6cc39fde0cef6fa6f365232.png",
        width: 1200,
        height: 630,
        alt: "Harry Yates",
      },
    ],
  },
};

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-5xl px-8 md:px-16 lg:px-8">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content={metadata.title}
        />
        <meta
          property="og:description"
          content={metadata.description}
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/page-url"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="fb:app_id"
          content="YOUR_FACEBOOK_APP_ID"
        />

        {metadata.openGraph?.images.map((image, index) => (
          <>
            <meta
              key={index}
              property="og:image"
              content={image.url}
            />
            <meta
              property="og:image:width"
              content={String(image.width)}
            />
            <meta
              property="og:image:height"
              content={String(image.height)}
            />
            <meta
              property="og:image:alt"
              content={image.alt}
            />
          </>
        ))}
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
