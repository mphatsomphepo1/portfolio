const Experience = ({ isVisible }) => {
  const experiences = [
    {
      title: 'Core Banking Support Intern',
      company: 'NBS Bank',
      period: 'October 2024 – Present',
      location: 'Malawi',
      responsibilities: [
        'Supporting Oracle FLEXCUBE core banking system operations',
        'Monitoring and troubleshooting banking transactions',
        'Analyzing system logs and performance metrics',
        'Collaborating with IT teams on system enhancements',
      ],
      type: 'work',
    },
    {
      title: 'Zindi Ambassador',
      company: 'Zindi Africa',
      period: '2023 – Present',
      location: 'Remote',
      responsibilities: [
        'Promoting AI/ML competitions and hackathons',
        'Organizing AI awareness events and workshops',
        'Mentoring participants in data science challenges',
        'Building AI community engagement in Malawi',
      ],
      type: 'work',
    },
    {
      title: 'Programs Director',
      company: 'University of Malawi ICT Society',
      period: '2022 – 2023',
      location: 'Malawi',
      responsibilities: [
        'Led strategic planning for society programs',
        'Organized tech events and workshops',
        'Coordinated with industry partners',
        'Managed team of program coordinators',
      ],
      type: 'leadership',
    },
    {
      title: 'Co-founder',
      company: 'RootedSky',
      period: '2023',
      location: 'Malawi',
      responsibilities: [
        'Co-founded technology solutions startup',
        'Developed business strategy and operations',
        'Led technical project implementations',
        'Built partnerships with clients',
      ],
      type: 'leadership',
    },
    {
      title: 'Publicity Secretary',
      company: 'University Computer Science Club',
      period: '2021 – 2022',
      location: 'Malawi',
      responsibilities: [
        'Managed club communications and outreach',
        'Created promotional materials for events',
        'Coordinated with media and stakeholders',
        'Increased club membership by 40%',
      ],
      type: 'leadership',
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            My Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-blue-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className="flex-1 md:text-right text-left pl-16 md:pl-0">
                    {index % 2 === 0 && (
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.title}
                            </h3>
                            <p className="text-primary-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              exp.type === 'work'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            {exp.type === 'work' ? 'Work' : 'Leadership'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {exp.period} • {exp.location}
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary-600 mr-2">▸</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />

                  <div className="flex-1 md:text-left text-left pl-16 md:pl-0">
                    {index % 2 !== 0 && (
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.title}
                            </h3>
                            <p className="text-primary-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              exp.type === 'work'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            {exp.type === 'work' ? 'Work' : 'Leadership'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {exp.period} • {exp.location}
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary-600 mr-2">▸</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
