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
    <section className="relative pb-12 sm:pb-16 overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[440px] rounded-4xl overflow-hidden">
          <div className="absolute inset-0 hidden overflow-hidden rounded-4xl lg:block">
            <img
              src="Subscribebg.png"
              alt="Subscribe background"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="relative w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div className="w-full max-w-xl text-center">
              <h2 className="font-inter font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tighter text-gray-900 mb-4 break-words">
                Subscribe to get the first news
              </h2>
              <p className="font-inter font-normal text-sm sm:text-base leading-relaxed text-gray-600 mb-6 sm:mb-8 break-words">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Your email address..."
                  className="w-full sm:flex-1 sm:max-w-md px-4 py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base bg-black text-white font-semibold rounded-2xl hover:bg-gray-900 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-green-600 font-semibold mt-4 text-sm sm:text-base">
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
