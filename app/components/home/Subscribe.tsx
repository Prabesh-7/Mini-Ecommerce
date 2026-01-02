'use client'

import React, { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) {
      localStorage.setItem('subscribedEmail', email)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubscribe()
    }
  }
  return (
    <section className="relative pb-12">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[440px]">


          <div className="absolute top-0 right-0 h-full w-[1250px] hidden lg:block">
            <img
              src="/Subscribebg.png"
              alt="Subscribe background"
              className="w-full h-full object-cover rounded-4xl"
              loading="eager"
            />
          </div>

          <div className="relative w-full flex items-center justify-center py-16">
            <div className="max-w-xl text-center">
              <h2 className="font-inter font-semibold text-4xl leading-tight tracking-tighter text-gray-900 mb-4">
                Subscribe to get the first news
              </h2>
              <p className="font-inter font-normal text-base leading-7 text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
              </p>
              <div className="flex items-center justify-center gap-3">
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Your email address..."
                  className="flex-1 px-4 py-3   rounded-lg text-gray-700 placeholder-gray-500 "
                />
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-3 bg-black text-white font-semibold rounded-2xl hover:bg-gray-900 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-green-600 font-semibold mt-4">
                  Email saved successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
