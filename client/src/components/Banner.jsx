import React from 'react'
import Card from './Card'

const Banner = () => {
  return (
    <div className='min-w-full max-h-screen border-b-8 border-primary'>
      <div className='h-128 flex flex-row justify-between items-center bg-banner-bg bg-cover px-48 gap-28'>
        <div className='max-w-xl text-justify bg-primary/40 backdrop-blur-xl p-8'>
          <h1 className='text-5xl text-white font-bold leading-snug tracking-wide pb-4'>Chat in Realtime with Friends or Randoms.</h1>
          <p className='text-white opacity-80 text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus deleniti sint? Dignissimos minima ullam.
          </p>
        </div>
        <div className=''>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Banner