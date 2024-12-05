import { CardMobile } from './card-mobile'
import { CardDesktop } from './card-desktop'
import { Title } from '@/components/title'

export const Index = () => {
  return (
    <div id="projects" className="w-full bg-primary py-10">
      <div className="container mx-auto flex h-full flex-col gap-8 px-4 xl:px-0">
        <Title label="Projetos" />
        <CardMobile />
        <CardDesktop />
      </div>
    </div>
  )
}
