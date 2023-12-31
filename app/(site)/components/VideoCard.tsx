import { Project } from "@/app/types/Project";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";

export default function VideoCard({ project }: { project: Project }) {
  const { video, name, url, github, content } = project;

  return (
    <div className="grid grid-cols-1 gap-4 relative mx-auto">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fade-in-slide-up py-4 border-b-2 border-gray-200/60 pb-12 relative w-sm max-w-md">
        <div className="light-shadow transition-shadow group bg-transparent transform rounded-sm  hover:cursor-pointer">
          <div
            className="  rounded-sm duration-500 relative w-full"
            // style={{ paddingTop: "56.25%" }}
            style={{ paddingTop: "51.25%" }}>
            {video ? (
              <video
                className="rounded-sm bg-[#E3E3E3] absolute top-0 left-0 h-full object-cover"
                src={video}
                autoPlay
                playsInline
                muted
                loop
                preload="none"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full object-cover max-h-[250px] min-h-[250px] bg-[#E3E3E3]">
                No media available
              </div>
            )}
          </div>
          {url && <p className="font-medium my-2">{name}</p>}
          {content && (
            <div className="text-gray-700 w-3/4">
              <PortableText value={content} />
            </div>
          )}
        </div>
      </a>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Project on GitHub"
          className="fade-in-slide-up absolute bottom-4 left-0">
          <CodeBracketSquareIcon className="h-6 w-6 text-gray-300" />
        </a>
      )}
    </div>
  );
}
