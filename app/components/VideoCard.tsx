import { Project } from "@/app/types/Project";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

export default function VideoCard({ project }: { project: Project }) {
  const { video, name, url, github } = project;

  return (
    <div className="grid grid-cols-1 gap-4 relative">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="py-4 border-b-2 border-gray-200/60 pb-12 relative">
        <div className="group bg-transparent transform rounded-sm transition duration-500 hover:cursor-pointer">
          <div className="shadow-lg transition-shadow rounded-sm duration-100 group-hover:shadow-xl">
            {video ? (
              <video
                className="rounded-sm bg-[#E3E3E3] overflow-hidden w-full h-full object-cover max-h-[250px] min-h-[250px]"
                src={video}
                autoPlay
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
          <p className="text-gray-700 w-3/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            itaque beatae. Aperiam ipsum quas vel? Deleniti nobis, quam tempore
            possimus deserunt laborum quasi sunt.
          </p>
        </div>
      </a>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-0">
          <CodeBracketSquareIcon className="h-6 w-6 text-gray-300" />
        </a>
      )}
    </div>
  );
}
