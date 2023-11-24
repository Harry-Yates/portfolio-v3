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
        {/* <!-- Primary Meta Tags --> */}
        <title>Harry Yates | Fullstack Developer</title>
        <meta
          name="title"
          content="Harry Yates | Fullstack Developer"
        />
        <meta
          name="description"
          content="I am a Fullstack Developer focusing on JavaScript. "
        />

        {/* <!-- Open Graph / Facebook --> */}
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
          content="Harry Yates | Fullstack Developer"
        />
        <meta
          property="og:description"
          content="I am a Fullstack Developer focusing on JavaScript. "
        />
        <meta
          property="og:image"
          // content="https://metatags.io/images/meta-tags.png"
          content="../app/favicon.ico"
        />

        {/* <!-- Twitter --> */}
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
          content="Harry Yates | Fullstack Developer"
        />
        <meta
          property="twitter:description"
          content="I am a Fullstack Developer focusing on JavaScript. "
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
          // content="../app/favicon.ico"
        />

        <link
          rel="preload"
          href="/fonts/HelveticaNowDisplay-Regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNowDisplay-Regular.woff2"
          as="font"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNowDisplay-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNowDisplay-Medium.woff2"
          as="font"
          type="font/woff"
        />

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
