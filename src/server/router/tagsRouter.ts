import { createRouter } from './context';
import { z } from 'zod';

export const tagsRouter = createRouter()
  .mutation('create-tag', {
    input: z.object({
      name: z.string(),
      category: z.string().array(),
    }),

    async resolve({ ctx, input }) {
      const tag = await ctx.prisma!.tag.create({
        data: {
          name: input.name,
          category: input.category,
        },
      });
      return tag;
    },
  })
  .query('getAllTags', {
    async resolve({ ctx }) {
      const tags = await ctx.prisma!.tag.findMany();
      return tags;
    },
  });
