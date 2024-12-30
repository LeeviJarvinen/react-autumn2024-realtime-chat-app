import React from 'react'
import ChatPreview from './ChatPreview'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CTA = () => {

  const { userInfo } = useSelector((state) => state.auth)
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className='bg-banner-bg'>
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex justify-between items-center pt-8'>
            <h1 className='text-indigo-100 text-3xl font-semibold no-underline'>
              CHAT.TY
            </h1>
            {userInfo ?
            <div className='gap-10 flex items-center'>
              <Link className='link link-neutral text-indigo-100 font-semibold no-underline' to='/chat'>
                Chat
              </Link>
              <Link className='link link-neutral text-indigo-100 font-semibold no-underline' to='/chat'>
                {userInfo.username}
              </Link>
              </div>
            :
              <Link className='link link-neutral text-indigo-100 font-semibold no-underline' to='/login'>
                Login
              </Link>
            }
          </div>
          <div className="relative pb-16 sm:pb-24">
            <div className="mt-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 space-y-8">
                  <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 rounded-full">
                    <span className="px-3 py-0.5 text-sm font-semibold text-indigo-100 bg-indigo-500/40 rounded-full">New</span>
                    <span className="ml-3 text-sm text-indigo-100">Video calls now available!</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                    Chat Smarter, <br />Connect Faster
                  </h1>
                  <p className="text-xl text-indigo-100 max-w-lg">
                    Experience real-time messaging with powerful features. Built for teams and individuals who value efficient communication.
                  </p>
                  <div className="flex gap-4">
                    <Link className="btn btn-lg bg-white text-indigo-600 rounded-lg font-semibold" to="/chat">
                      Start Chatting
                    </Link>
                    <button className="btn btn-lg bg-indigo-500/20 text-white rounded-lg font-semibold hover:bg-indigo-500/30 transition-all border border-indigo-400/30" onClick={scrollToFeatures}>
                      Features
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg opacity-30 blur-lg"></div>
                  <div className="relative bg-primary-content rounded-lg shadow-2xl p-4">
                    <ChatPreview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA