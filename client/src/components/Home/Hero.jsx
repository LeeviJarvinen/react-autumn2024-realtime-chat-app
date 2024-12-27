import React from 'react'
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <div className="relative overflow-hidden bg-indigo-600 py-16">
          <div className="absolute inset-0 bg-gradient-to-r bg-indigo-600"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to transform your communication?</h2>
                      <p className="mt-4 text-xl text-indigo-100">Join thousands of users already loving our platform</p>
                  </div>
                  <Link className="btn btn-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 flex items-center gap-2" to="/register">
                      Get Started Now
                      <ChevronRight className="w-5 h-5" />
                  </Link>
                  
                </div>
          </div>
      </div>
  )
}

export default Hero