const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mphatso Mphepo</h3>
            <p className="text-gray-400 leading-relaxed">
              ICT and Data Science Professional specializing in Core Banking and
              Process Automation
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/mphatso-mphepo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <img
                  src="/src/assets/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://github.com/mphatsomphepo1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <img
                  src="/src/assets/github.png"
                  alt="GitHub"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a
                  href="mailto:mphatsomphepo829@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  mphatsomphepo829@gmail.com
                </a>
              </p>
              <p>Malawi</p>
              <a
                href="/src/assets/mphatsomphepocv.pdf"
                download
                className="inline-block mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            Copyright &copy; 2025 Mphatso Mphepo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
