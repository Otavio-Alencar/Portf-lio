import { Title } from '@/components/title'
import ShineBorder from '@/components/ui/shine-border'
import { AboutData } from '@/data/about'
import Image from 'next/image'

export const About = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto flex h-full flex-col gap-8 px-4 xl:px-0">
        <div>
          <Title label="Sobre Mim" />
        </div>
        <div className="flex lg:justify-between">
          <ul className="flex w-full flex-col gap-2 lg:w-1/2">
            {AboutData.map((item, index) => (
              <li
                key={index}
                className="flex border-b border-[#88c0d04e] p-2 text-sm md:whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
          <ShineBorder className="relative hidden flex-col items-center justify-center overflow-hidden bg-transparent lg:flex lg:h-80 lg:w-80">
            <Image
              src={'/about/perfil.jpg'}
              alt="Minha Foto"
              layout="responsive"
              className="rounded-lg"
              width={320}
              height={320}
            />
          </ShineBorder>
        </div>
      </div>
    </div>
  )
}
