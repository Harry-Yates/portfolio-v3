import { Project } from "@/app/types/Project";

export default function VideoCard({ project }: { project: Project }) {
  const { video, name } = project;

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="group bg-transparent transform rounded-sm transition duration-500 hover:cursor-pointer">
        <div className="shadow-lg transition-shadow rounded-sm duration-100 group-hover:shadow-xl">
          <video
            className="w-full rounded-sm bg-[#E3E3E3] overflow-hidden object-cover"
            src={video}
            autoPlay
            muted
            loop
            preload="none"
          />
        </div>
        <div className="py-4 border-b-2 border-gray-200 pb-9">
          <p className="font-medium mb-2">{name}</p>
          <p className="text-gray-700 w-3/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            itaque beatae. Aperiam ipsum quas vel? Deleniti nobis, quam tempore
            possimus deserunt laborum quasi sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
