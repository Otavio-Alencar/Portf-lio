'use client'

import animation from './animations/animationHome.json'
import Lottie from 'lottie-react'
export const HomeAnimation = () => {
  return (
    <Lottie
      animationData={animation}
      loop={true}
      autoplay={true}
      style={{ width: 500, height: 500 }}
    />
  )
}
