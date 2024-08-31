// components/ProjectsSection.tsx

import { FC } from 'react'
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si'

// Define the types for project and technology icons
type Technology =
  | 'React.js'
  | 'Node.js'
  | 'Tailwind CSS'
  | 'Next.js'
  | 'TypeScript'
  | 'MongoDB'
  | 'CSS'
  | 'Database'

interface Project {
  title: string
  description: string
  technologies: Technology[]
  link: string
  image: string
}

const technologyIcons: Record<Technology, JSX.Element> = {
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
}

const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A brief description of Project One. Highlight key features and technologies used.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
    link: '#',
    image: '/images/project1.png', // Update with actual image path
  },
  {
    title: 'Project Two',
    description:
      'A brief description of Project Two. Highlight key features and technologies used.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    link: '#',
    image: '/images/project2.png', // Update with actual image path
  },
  // Add more projects as needed
]

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="bg-gray-900 text-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center text-sm mr-4 mb-2"
                  >
                    {technologyIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-teal-400 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
