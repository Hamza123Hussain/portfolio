'use client'
import { FC, useState, FormEvent } from 'react'
import axios from 'axios'

const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      // Perform the form submission using Axios
      const response = await axios.post(
        'https://formspree.io/f/mqaznrwn',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        // Handle success response if needed
        console.log('Success:', response.data)
        // Clear the form fields
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('Unexpected response:', response)
      }
    } catch (error) {
      // Handle error response if needed
      console.error('Error:', error)
    }
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-200 py-16 px-6 mt-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-400 text-gray-900 py-2 px-4 rounded hover:bg-gray-900 hover:text-teal-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Feel free to reach out to me via email, phone, or connect with me
              on LinkedIn and GitHub.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fas fa-envelope text-teal-400 mr-3"></i>
                <a
                  href="mailto:hamzahussain14.hh@gmail.com"
                  className="hover:underline"
                >
                  hamzahussain14.hh@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-teal-400 mr-3"></i>
                <a href="tel:+923204016684" className="hover:underline">
                  +92 320 4016 684
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-linkedin text-teal-400 mr-3"></i>
                <a
                  href="https://www.linkedin.com/in/hamzahussain"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-github text-teal-400 mr-3"></i>
                <a
                  href="https://github.com/Hamza123Hussain"
                  className="hover:underline"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
