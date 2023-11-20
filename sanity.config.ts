import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "@/app/sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "ofj891ge",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2021-11-20",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
