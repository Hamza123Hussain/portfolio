// components/HomePage.tsx

import SomeProjects from '@/components/SomeProjects'
import { FC } from 'react'
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiClerk,
  SiEslint,
  SiRedux,
  SiAuth0,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si'

const technologyIcons: Record<string, JSX.Element> = {
  'React.js': <FaReact className="inline-block w-6 h-6 mr-2 text-blue-500" />,
  'Node.js': <FaNodeJs className="inline-block w-6 h-6 mr-2 text-green-500" />,
  'Tailwind CSS': (
    <SiTailwindcss className="inline-block w-6 h-6 mr-2 text-cyan-500" />
  ),
  'Next.js': (
    <SiNextdotjs className="inline-block w-6 h-6 mr-2 text-gray-900" />
  ),
  TypeScript: (
    <SiTypescript className="inline-block w-6 h-6 mr-2 text-blue-600" />
  ),
  MongoDB: <SiMongodb className="inline-block w-6 h-6 mr-2 text-green-700" />,
  CSS: <FaCss3Alt className="inline-block w-6 h-6 mr-2 text-blue-400" />,
  Database: <FaDatabase className="inline-block w-6 h-6 mr-2 text-gray-600" />,
  Firebase: (
    <SiFirebase className="inline-block w-6 h-6 mr-2 text-yellow-500" />
  ),
  Supabase: <SiSupabase className="inline-block w-6 h-6 mr-2 text-green-500" />,
  API: <FaDatabase className="inline-block w-6 h-6 mr-2 text-gray-600" />, // Placeholder
  OAuth: <SiAuth0 className="inline-block w-6 h-6 mr-2 text-blue-500" />,
  ESLint: <SiEslint className="inline-block w-6 h-6 mr-2 text-blue-400" />,
  NoSQL: <FaDatabase className="inline-block w-6 h-6 mr-2 text-gray-600" />, // Placeholder
  Redux: <SiRedux className="inline-block w-6 h-6 mr-2 text-purple-600" />,
  JavaScript: (
    <SiJavascript className="inline-block w-6 h-6 mr-2 text-yellow-500" />
  ),
  HTML: <SiHtml5 className="inline-block w-6 h-6 mr-2 text-orange-600" />,
  ClerkJS: <SiClerk className="inline-block w-6 h-6 mr-2 text-blue-500" />,
}

const projects = [
  {
    title: 'Project One',
    description:
      'A brief description of Project One. Highlight key features and technologies used.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
    link: '#',
    image: '/images/project1.png',
  },
  {
    title: 'Project Two',
    description:
      'A brief description of Project Two. Highlight key features and technologies used.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    link: '#',
    image: '/images/project2.png',
  },
]

const skills = [
  { name: 'React.js', icon: <FaReact className="w-6 h-6 text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" />,
  },
  { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-gray-900" /> },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
  },
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-700" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6 text-blue-400" /> },

  {
    name: 'Firebase',
    icon: <SiFirebase className="w-6 h-6 text-yellow-500" />,
  },
  { name: 'Supabase', icon: <SiSupabase className="w-6 h-6 text-green-500" /> },
  {
    name: 'API Integration',
    icon: <FaDatabase className="w-6 h-6 text-gray-600" />,
  }, // Placeholder
  { name: 'OAuth', icon: <SiAuth0 className="w-6 h-6 text-blue-500" /> },
  { name: 'ESLint', icon: <SiEslint className="w-6 h-6 text-blue-400" /> },
  { name: 'Redux', icon: <SiRedux className="w-6 h-6 mr-2 text-purple-600" /> },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="w-6 h-6 text-yellow-500" />,
  },
  { name: 'HTML', icon: <SiHtml5 className="w-6 h-6 text-orange-600" /> },
  { name: 'ClerkJS', icon: <SiClerk className="w-6 h-6 text-blue-500" /> },
]

const HomePage: FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-gray-200 h-screen flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Hamza Hussain</h1>
        <p className="text-base sm:text-xl mb-6">
          Full-Stack Developer | Creating Innovative Solutions with Cutting-Edge
          Technologies
        </p>
        <a
          href="/resume.pdf" // Pointing to the resume file in the public directory
          download // This attribute suggests to the browser that it should download the file instead of opening it
          className="bg-teal-400 text-gray-900 py-2 px-4 rounded hover:bg-gray-900 hover:text-teal-400 transition-colors"
        >
          Download Resume
        </a>
      </section>

      {/* About Preview */}
      <section id="about" className="bg-gray-800 text-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            About Me
          </h2>
          <p className="text-base sm:text-lg mb-6">
            I’m a passionate web developer with a strong foundation in frontend
            and backend technologies. I specialize in creating dynamic and
            responsive web applications with a focus on clean code and
            user-friendly design. With experience in React, Next.js, and
            Node.js, I enjoy solving complex problems and building impactful
            digital experiences.
          </p>
          <div className="text-center">
            <a href="/about" className="text-teal-400 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </section>

      <SomeProjects />

      {/* Skills Summary */}
      <section id="skills" className="bg-gray-800 text-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 text-base sm:text-lg"
              >
                <span>{skill.icon}</span> {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
