import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ base: "./articles", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        pubDate: z.date(), // e.g. 2024-09-17
        published: z.boolean().default(false),
    })
});

export const collections = { blog };
