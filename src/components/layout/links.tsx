import { ReactNode } from 'react'

interface props {
  link: string
  icon: ReactNode
}
export const LinkFooter = (props: props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="rounded-full border border-transparent bg-popover p-2 text-secondary hover:border-secondary"
    >
      {props.icon}
    </a>
  )
}
