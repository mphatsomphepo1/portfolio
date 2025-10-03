const Testimonials = ({ isVisible }) => {
  const testimonials = [
    {
      name: 'Professional Reference',
      position: 'Senior Manager, NBS Bank',
      text: 'Placeholder for professional testimonial. Connect with me on LinkedIn for verified recommendations and endorsements.',
      avatar: null,
    },
    {
      name: 'Industry Leader',
      position: 'Data Science Mentor',
      text: 'Placeholder for industry testimonial. Visit my LinkedIn profile to see verified recommendations from colleagues and mentors.',
      avatar: null,
    },
    {
      name: 'Academic Reference',
      position: 'University Faculty',
      text: 'Placeholder for academic testimonial. Check my LinkedIn for recommendations from professors and academic advisors.',
      avatar: null,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            What Others Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-600 leading-relaxed italic mb-4">
                {testimonial.text}
              </p>

              <a
                href="https://www.linkedin.com/in/mphatso-mphepo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                View on LinkedIn
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/mphatso-mphepo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            See All Recommendations on LinkedIn
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  )
}

export default Testimonials
