import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";
import NodeCache from "node-cache";

const projectCache = new NodeCache({ stdTTL: 14400 });

export async function getProjects(): Promise<Project[]> {
  try {
    // Attempt to retrieve projects from cache
    let projects = projectCache.get<Project[]>("projects") || []; // Initialize with an empty array if cache is empty

    if (projects.length === 0) {
      // If cache is empty, fetch from Sanity
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

      projects = await client.fetch(query);
      projectCache.set("projects", projects);
    }

    console.log(projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
