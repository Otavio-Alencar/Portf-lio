'use client'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactSchema } from '@/schema/contact-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

export function ContactForm() {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
  })
  function onSubmit(values: z.infer<typeof ContactSchema>) {
    console.log(values)
    const templateParams = {
      from_name: values.nome,
      message: values.body,
      email: values.email,
    }
    emailjs
      .send(
        'service_oyzolco',
        'template_1dqmcce',
        templateParams,
        'bJyB3CYRgKVrVO8rH',
      )
      .then(() => {
        toast('E-mail enviado com sucesso', {
          action: {
            label: 'X',
            onClick: () => console.log('Undo'),
          },
        })
      })
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 lg:w-1/2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Otávio Alencar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="ex: nome@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Seu texto" rows={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit" className="!important bg-[#88c0d0]">
          Enviar
        </Button>
      </form>
    </Form>
  )
}
