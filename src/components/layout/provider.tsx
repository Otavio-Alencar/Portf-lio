import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

type child = {
  children: ReactNode
}
export const Provider = ({ children }: child) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
