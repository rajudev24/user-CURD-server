import { z } from 'zod'

const createPostZodSchema = z.object({
  body: z.object({
    text: z.string({
      required_error: 'Text is required',
    }),
    authorId: z.string({
      required_error: 'Author ID is required',
    }),
    profession: z.string({
      required_error: 'Profession is required',
    }),
    subProfession: z.string({
      required_error: 'Sub Profession is required',
    }),
  }),
})

export const PostValidation = {
  createPostZodSchema,
}
