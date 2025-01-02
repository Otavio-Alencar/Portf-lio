'use client'
import animation from './animations/animationHome.json'

import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})
export const HomeAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 400 }}
      />
    </div>
  )
}
