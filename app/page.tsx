import { getProjects as fetchProjects } from "@/app/sanity/sanity-utils";
import Links from "./components/Links";
import VideoCard from "./components/VideoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry Yates | Fullstack Developer",
  description: "Portfolio",
  metadataBase: new URL("https://hyates.com"),
  openGraph: {
    title: "Harry Yates | Fullstack Developer",
    description: "Portfolio",
    url: "hyates.com",
    siteName: "Harry Yates Portfolio",
    images: [
      {
        url: "https://hyates.com/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
    },
  },
  twitter: {
    title: "Harry Yates | Fullstack Developer",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/flavicon.ico",
  },
};

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-5xl px-8 md:px-16 lg:px-8 lg:mt-8">
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
