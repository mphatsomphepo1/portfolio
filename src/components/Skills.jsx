const Skills = ({ isVisible }) => {
  const technicalSkills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'Oracle FLEXCUBE', level: 'Intermediate' },
    { name: 'Camunda BPM', level: 'Intermediate' },
    { name: 'Power BI', level: 'Advanced' },
    { name: 'WebLogic', level: 'Intermediate' },
    { name: 'Oracle Cloud', level: 'Intermediate' },
    { name: 'Data Analytics', level: 'Advanced' },
  ]

  const professionalSkills = [
    { name: 'Problem Solving', level: 'Expert' },
    { name: 'Leadership', level: 'Advanced' },
    { name: 'Project Management', level: 'Advanced' },
    { name: 'ITIL Framework', level: 'Intermediate' },
    { name: 'Business Analysis', level: 'Advanced' },
    { name: 'Stakeholder Management', level: 'Advanced' },
  ]

  const SkillCard = ({ name, level, index }) => (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all hover:-translate-y-1 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
          {level}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
          style={{
            width:
              level === 'Expert'
                ? '100%'
                : level === 'Advanced'
                ? '85%'
                : '70%',
          }}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            Explore My
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-600 rounded-full mr-3" />
              Technical Skills
            </h3>
            <div className="grid gap-4">
              {technicalSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-600 rounded-full mr-3" />
              Professional Skills
            </h3>
            <div className="grid gap-4">
              {professionalSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
