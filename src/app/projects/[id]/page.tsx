import ShineBorder from '@/components/ui/shine-border'
import { ProjectsData } from '@/data/projects'

import Link from 'next/link'
type Props = {
  params: {
    id: string
  }
}
const Page = ({ params }: Props) => {
  const project = ProjectsData.find((item) => item.id === parseInt(params.id))
  return (
    <div className="min-h-[calc(100vh-100px)] w-full overflow-hidden pt-[112px] md:min-h-screen">
      <div className="flex gap-5">
        {!project ? (
          <div className="w-full text-center font-bold">
            Projeto não encontrado
          </div>
        ) : (
          <div className="container mx-auto my-2 flex flex-col items-center gap-2 pt-8 lg:gap-6">
            <ShineBorder className="relative hidden flex-col items-center justify-center overflow-hidden bg-transparent p-0 shadow-md md:flex md:w-3/5">
              <img
                className="h-full p-0"
                src={project.image}
                alt="imagem do projeto"
              />
            </ShineBorder>

            <div className="container mx-auto flex flex-col justify-between gap-6 px-5 md:px-0 md:pb-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-3xl font-bold md:text-start">
                  {project.title}
                </h1>
                <p className="text-wrap break-all text-center md:max-w-[90%] md:text-start lg:max-w-full">
                  {project.largeDescription}
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 md:justify-start">
                <Link
                  className="flex w-48 items-center justify-center rounded-md border border-secondary bg-transparent py-2 text-sm hover:bg-secondary"
                  href={'/'}
                >
                  Voltar
                </Link>
                <Link
                  className="flex w-48 items-center justify-center rounded-md bg-secondary py-2 text-sm hover:bg-secondary/90"
                  href={project.repoLink}
                >
                  Ir para repositório
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
