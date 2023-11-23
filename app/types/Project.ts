import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string | null;
  video: string;
  url: string;
  github: string;
  content: PortableTextBlock[];
};
