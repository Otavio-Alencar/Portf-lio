import { Button } from '@/components/ui/button'
import { HomeAnimation } from './home-animation'

export const Hero = () => {
  return (
    <div id="home" className="h-[calc(100vh-112px)] w-full">
      <div className="container mx-auto flex h-full justify-between px-4 xl:px-0">
        <div className="flex h-full flex-col items-center justify-center gap-10 lg:max-w-[40%] lg:items-start">
          <article className="flex flex-col items-center gap-4 px-5 lg:items-start lg:px-0">
            <h1 className="text-center text-5xl font-bold leading-3 lg:text-start lg:text-5xl">
              SEJA BEM VINDO AO MEU PORTFÓLIO
            </h1>
            <p className="text-center text-sm lg:text-start">
              Olá, sou Otávio Alencar, desenvolvedor web. Neste portfólio, você
              encontrará alguns dos meus projetos. Sinta-se à vontade para
              explorar!
            </p>
          </article>
          <div className="flex gap-2">
            <a href="#projects">
              <Button size={'lg'} variant={'secondary'}>
                Ver mais
              </Button>
            </a>
            <a href="#contact">
              <Button
                size={'lg'}
                className="border border-secondary bg-transparent transition-all hover:bg-secondary"
              >
                Contato
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden h-full items-center justify-center lg:flex">
          <HomeAnimation />
        </div>
      </div>
    </div>
  )
}
