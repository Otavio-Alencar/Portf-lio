import { Title } from '@/components/title'
import { ContactForm } from './contact-form'

export const Contact = () => {
  return (
    <div id="contact" className="w-full pb-16">
      <div className="container mx-auto flex h-full flex-col gap-8 px-4 xl:px-0">
        <Title label="Contato" />
        <ContactForm />
      </div>
    </div>
  )
}
