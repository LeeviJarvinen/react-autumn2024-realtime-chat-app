import React, { useEffect } from 'react'
import { Boxes } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    })

  return (
    <div className='text-base-200 flex flex-col items-center'>
        <Boxes
        className='size-60'
        />
        <h1 className='text-7xl font-semibold'>NOT FOUND</h1>
        <span className='text-xl'>Redirecting . . .</span>
    </div>
  )
}

export default NotFound