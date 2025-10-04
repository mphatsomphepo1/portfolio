import { useState, useEffect } from 'react'
import profileImg from '../assets/Mphatso Profile.png'

const Hero = ({ isVisible }) => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Transforming data into insights, and insights into business transformation.'

  useEffect(() => {
    if (isVisible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [typedText, isVisible])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 pt-20 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="order-2 md:order-1 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <p className="text-primary-600 font-semibold text-lg animate-fade-in-up">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 animate-fade-in-up animation-delay-200">
                Mphatso Mphepo
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 animate-fade-in-up animation-delay-400">
                ICT and Data Science Professional
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-600">
                Core Banking & Process Automation Specialist
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed min-h-16 animate-fade-in-up animation-delay-800">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-1000">
              <a
                href="/src/assets/mphatsomphepocv.pdf"
                download
                className="group px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                Contact Me
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex gap-4 pt-4 animate-fade-in-up animation-delay-1200">
              <a
                href="https://www.linkedin.com/in/mphatso-mphepo"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                aria-label="LinkedIn"
              >
                <img
                  src="/src/assets/linkedin.png"
                  alt="LinkedIn"
                  className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
              <a
                href="https://github.com/mphatsomphepo1"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                aria-label="GitHub"
              >
                <img
                  src="/src/assets/github.png"
                  alt="GitHub"
                  className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in animation-delay-400">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <img
                src={profileImg}
                alt="Mphatso Mphepo"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
