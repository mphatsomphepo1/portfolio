const Certifications = ({ isVisible }) => {
  const certifications = [
    {
      name: 'Oracle Cloud Infrastructure Data Science Professional',
      issuer: 'Oracle',
      year: '2025',
      category: 'Cloud & Data Science',
      featured: true,
    },
    {
      name: 'ALX Responsible AI Trainer Coach',
      issuer: 'ALX Africa',
      year: '2024',
      category: 'AI/ML',
      featured: true,
    },
    {
      name: 'PwC Data Science Job Simulation',
      issuer: 'PwC & Forage',
      year: '2024',
      category: 'Data Science',
      featured: false,
    },
    {
      name: 'British Airways Data Science Job Simulation',
      issuer: 'British Airways & Forage',
      year: '2024',
      category: 'Data Science',
      featured: false,
    },
    {
      name: 'ISC2 Cybersecurity Foundations',
      issuer: 'ISC2',
      year: '2024',
      category: 'Cybersecurity',
      featured: false,
    },
    {
      name: 'Project Management Foundations',
      issuer: 'LinkedIn Learning',
      year: '2023',
      category: 'Management',
      featured: false,
    },
  ]

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            Professional Development
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-1 ${
                cert.featured
                  ? 'border-primary-500 bg-gradient-to-br from-white to-primary-50'
                  : 'border-gray-100'
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {cert.featured && (
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
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
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-primary-600 font-semibold text-sm">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {cert.category}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
