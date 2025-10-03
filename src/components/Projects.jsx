const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: 'ACH Transaction Monitoring Dashboard',
      description:
        'Real-time dashboard for monitoring ACH transactions, providing insights into payment flows, error rates, and system performance with Power BI integration.',
      technologies: ['Power BI', 'SQL', 'FLEXCUBE'],
      github: 'https://github.com/mphatsomphepo1',
      image: '/src/assets/project1.png',
      highlights: [
        'Real-time transaction monitoring',
        'Automated error detection',
        'Performance analytics',
      ],
    },
    {
      title: 'Camunda BPM Automation Workflows',
      description:
        'Automated business process workflows using Camunda BPM for banking operations, reducing manual processing time and improving operational efficiency.',
      technologies: ['Camunda BPM', 'Java', 'Spring Boot'],
      github: 'https://github.com/mphatsomphepo1',
      image: '/src/assets/project3.png',
      highlights: [
        'Process automation',
        'Workflow optimization',
        'Integration with core systems',
      ],
    },
    {
      title: 'Farm Records Management System',
      description:
        'Comprehensive farm management system for tracking agricultural operations, inventory, and financial records.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/mphatsomphepo1/FarmRecordsManagementSystem',
      liveDemo:
        'https://github.com/mphatsomphepo1/FarmRecordsManagementSystem',
      image: '/src/assets/project12345.png',
      highlights: [
        'Inventory tracking',
        'Financial reporting',
        'Crop management',
      ],
    },
    {
      title: 'AI/ML Hackathon Projects',
      description:
        'Multiple data science and machine learning projects developed during Zindi competitions, focusing on solving African challenges through AI.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
      github: 'https://github.com/mphatsomphepo1',
      image: '/src/assets/project12.png',
      highlights: [
        'Predictive modeling',
        'Data analysis',
        'Community impact',
      ],
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            Browse My Recent
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-blue-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <span className="text-primary-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold text-center hover:bg-primary-50 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
