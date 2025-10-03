const Education = ({ isVisible }) => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Education
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl shadow-xl p-8 border border-primary-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Science in Information Systems
                </h3>
                <p className="text-primary-600 font-semibold text-lg mb-2">
                  University of Malawi
                </p>
                <p className="text-gray-600 mb-4">2020 - 2024</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Dean's List for Academic Excellence (2022)
                    </span>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Focus Areas:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">Data Science</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">
                          Software Engineering
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">
                          Database Management
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">
                          Strategic Management
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">
                          Business Analytics
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">ICT Infrastructure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
