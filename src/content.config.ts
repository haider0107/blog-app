// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "./*.md", base: "./src/data/kb-blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    draft: z.boolean(),
    category: z.string(),
  }),
});
// const dogs = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
