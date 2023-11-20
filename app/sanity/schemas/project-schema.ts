const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*", // Accepts only video files
      },
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
          options: {
            isHighlighted: true, // Makes the caption field easily accessible
          },
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description: "A brief description of the video content",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
