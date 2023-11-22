import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "ofj891ge",
    dataset: "production",
    apiVersion: "2021-11-20",
  });

  const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "video": video.asset->url,
    url,
    content
  }`;

  const projects = await client.fetch(query);

  return projects;
}
