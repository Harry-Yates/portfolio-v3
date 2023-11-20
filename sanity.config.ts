import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "ofj891ge",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2021-11-20",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
