const About = ({ isVisible }) => {
  return (
    <section
      id="about"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            Get To Know More
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Me
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Results-driven ICT and Data Science professional with expertise in{' '}
                <span className="font-semibold text-primary-700">
                  Oracle FLEXCUBE Core Banking
                </span>
                ,{' '}
                <span className="font-semibold text-primary-700">
                  Camunda BPM
                </span>
                , and{' '}
                <span className="font-semibold text-primary-700">
                  Business Intelligence
                </span>
                . Certified Oracle Cloud Infrastructure Data Science Professional
                with proven ability to transform complex data into actionable
                business insights.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Currently supporting core banking operations at NBS Bank, leveraging
                advanced skills in{' '}
                <span className="font-semibold text-primary-700">
                  SQL, Python, Power BI
                </span>
                , and{' '}
                <span className="font-semibold text-primary-700">
                  WebLogic middleware
                </span>{' '}
                to optimize banking processes and enhance system reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Experience
              </h3>
              <p className="text-gray-600">
                Core Banking Support
                <br />
                Data Science & Analytics
                <br />
                Process Automation
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Education
              </h3>
              <p className="text-gray-600">
                BSc Information Systems
                <br />
                University of Malawi
                <br />
                2024 Graduate
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow sm:col-span-2">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Certifications
              </h3>
              <p className="text-gray-600">
                Oracle Cloud Infrastructure Data Science Professional (2025)
                <br />
                ALX Responsible AI Trainer Coach
                <br />
                ISC2 Cybersecurity Foundations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
