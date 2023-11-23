import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  video: string;
  url: string;
  github: string;
  content: PortableTextBlock[];
};
