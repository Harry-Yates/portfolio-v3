import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  try {
    const client = createClient({
      projectId: "ofj891ge",
      dataset: "production",
      apiVersion: "2021-11-20",
    });

    const query = groq`*[_type == "project"] | order(_createdAt desc){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "video": video.asset->url,
      url,
      github,
      content
    }`;

    const projects = await client.fetch(query);
    // const projects = await client.fetch(query, {}, { cache: "no-cache" });

    console.log(projects);

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
