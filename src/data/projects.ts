import { Project } from '../types/project'

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: 'Twitter clone',
    image: '/projects/twitter-clone.png',
    shortDescription: 'Um clone do site twitter feito em nextJs',
    largeDescription:
      'O Twitter Clone é um projeto proposto na plataforma de aprendizado B7Web e desenvolvido utilizando Next.js. Este projeto recria a interface visual e funcionalidades principais do Twitter, oferecendo aos usuários uma experiência muito semelhante à do aplicativo original.',
    stack: 'Front-End',
    repoLink: 'https://github.com/Otavio-Alencar/twitter-clone.git',
    siteLink: 'https://twitter-clone-rho-self-13.vercel.app/',
  },
  {
    id: 2,
    title: 'Lanchonete virtual',
    image: '/projects/loja.png',
    shortDescription: 'Base de um site para lanchonete feito em nextJS',
    largeDescription:
      'Uma aplicação web desenvolvida em Next.js, que simula uma lanchonete virtual. O site permite aos usuários navegarem pelo cardápio, selecionarem itens e realizarem pedidos de forma prática e intuitiva.',
    stack: 'Front-end',
    repoLink: 'https://github.com/Otavio-Alencar/BaseLoja.git',
    siteLink: 'https://loja-mockup.vercel.app/',
  },
]
