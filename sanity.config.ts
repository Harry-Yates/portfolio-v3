import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./app/sanity/schemas";

const config = defineConfig({
  projectId: "ofj891ge",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2021-11-20",
  basePath: "/admin",
  plugins: [deskTool()],
  useCdn: false,
  schema: { types: schemas },
});

export default config;
