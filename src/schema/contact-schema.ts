import { z } from 'zod'

export const ContactSchema = z.object({
  nome: z
    .string({ message: 'É necessário preencher esse campo.' })
    .min(2, 'Seu nome deve ter ao menos dois caracteres.'),
  email: z
    .string({ message: 'É necessário preencher esse campo' })
    .email({ message: 'O email inserido não é válido.' }),
  body: z
    .string({ message: 'É necessário preencher esse campo' })
    .min(2, 'Sua mensagem deve ter ao menos dois caracteres.'),
})
