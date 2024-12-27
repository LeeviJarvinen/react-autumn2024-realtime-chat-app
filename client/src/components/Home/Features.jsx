import React from 'react'
import { MessageSquare, Users, Shield, Zap } from 'lucide-react';

const Features = () => {
  return (
      <div id='features' className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                      {
                          icon: <MessageSquare className="w-8 h-8" />,
                          title: "Real-time Chat",
                          description: "Instant message delivery with typing indicators and read receipts",
                          color: "from-blue-500 to-indigo-500"
                      },
                      {
                          icon: <Shield className="w-8 h-8" />,
                          title: "End-to-End Encryption",
                          description: "Your conversations are always private and secure",
                          color: "from-emerald-500 to-teal-500"
                      },
                      {
                          icon: <Users className="w-8 h-8" />,
                          title: "Group Messaging",
                          description: "Create unlimited groups with advanced management tools",
                          color: "from-orange-500 to-pink-500"
                      },
                      {
                          icon: <Zap className="w-8 h-8" />,
                          title: "Lightning Fast",
                          description: "Optimized for performance across all devices",
                          color: "from-purple-500 to-indigo-500"
                      }
                  ].map((feature, index) => (
                      <div key={index} className="relative group">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-lg opacity-30 blur group-hover:opacity-100 transition duration-500`}></div>
                          <div className="relative bg-white p-8 rounded-lg hover:shadow-lg transition-all">
                              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white mb-6`}>
                                  {feature.icon}
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                              <p className="text-gray-600 text-lg">{feature.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default Features