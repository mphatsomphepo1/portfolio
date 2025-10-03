import { useState } from 'react'

const Contact = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    setTimeout(() => {
      setSubmitMessage(
        'Thank you for your message! I will get back to you soon.'
      )
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary-600 font-semibold text-lg mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, projects, or
              collaborations. Feel free to reach out through any of the channels
              below or use the contact form.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:mphatsomphepo829@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-primary-600">
                    mphatsomphepo829@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+265123456789"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-primary-600">Available on request</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mphatso-mphepo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src="/src/assets/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-primary-600">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/mphatsomphepo1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src="/src/assets/github.png"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <p className="text-primary-600">View my projects</p>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.name
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 bg-white'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.email
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 bg-white'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                      errors.message
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 bg-white'
                    }`}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      {submitMessage}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
