import profileImg from '../assets/Mphatso Profile.png'

const Hero = ({ isVisible }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-2">
              <p className="text-primary-600 font-semibold text-lg">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Mphatso Mphepo
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                ICT and Data Science Professional
              </h2>
              <p className="text-xl text-gray-600">
                Core Banking & Process Automation Specialist
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Transforming data into insights, and insights into business transformation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/src/assets/mphatsomphepocv.pdf"
                download
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/mphatso-mphepo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary-50 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <img
                  src="/src/assets/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://github.com/mphatsomphepo1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-primary-50 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <img
                  src="/src/assets/github.png"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src={profileImg}
                alt="Mphatso Mphepo"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
