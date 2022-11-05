import { createRouter } from './context';
import { z } from 'zod';

export const tagsRouter = createRouter()
  .query('getAllTags', {
    async resolve({ ctx }) {
      const tags = await ctx.prisma!.tag.findMany();
      return tags;
    },
  })
  .mutation('create-tag', {
    input: z.object({
      name: z.string(),
      category: z.string().array(),
    }),

    async resolve({ ctx, input }) {
      const { name, category } = input;
      const tag = await ctx.prisma!.tag.create({
        data: {
          name,
        },
      });
      return tag;
    },
  })
  .mutation('update-tag', {
    input: z.object({
      name: z.string(),
      category: z.string().array(),
    }),
    async resolve({ ctx, input }) {
      console.log('Ctx - ', ctx);
      console.log('input - ', input);
      return input;
    },
  });
