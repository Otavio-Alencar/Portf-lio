import { z } from 'zod'

export const ContactSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  body: z.string().min(2),
})
