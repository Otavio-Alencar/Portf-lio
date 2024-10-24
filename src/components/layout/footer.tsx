import { Github, Instagram, Linkedin } from 'lucide-react'
import { LinkFooter } from './links'
export const Footer = () => {
  return (
    <div className="flex h-36 items-center justify-center bg-primary">
      <div className="flex gap-5">
        <LinkFooter
          icon={<Instagram />}
          link={'https://www.instagram.com/__oalencar__/'}
        />
        <LinkFooter
          icon={<Github />}
          link={'https://github.com/Otavio-Alencar'}
        />
        <LinkFooter
          icon={<Linkedin />}
          link={'https://www.linkedin.com/in/otávio-alencar-a725aa308/'}
        />
      </div>
    </div>
  )
}
