// components/SomeProjects.tsx
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaNode,
  FaJsSquare,
  FaTerminal,
  FaServer,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiShadcnui,
  SiAuth0,
  SiReact,
  SiClerk,
  SiSupabase,
  SiExpress,
} from 'react-icons/si'
import { BiLogoFirebase, BiLogoMongodb, BiLogoPhp } from 'react-icons/bi'
import {
  AiFillGithub,
  AiOutlineApi,
  AiOutlineBranches,
  AiOutlineFile,
  AiOutlineRead,
  AiOutlineRobot,
} from 'react-icons/ai'
import { GiClapperboard, GiSandsOfTime } from 'react-icons/gi'
import { MdOutlineNotifications, MdWidgets } from 'react-icons/md'
import { TbApi, TbBrandReact, TbBrandVercel } from 'react-icons/tb'
import { RiReactjsLine } from 'react-icons/ri'
import Link from 'next/link'

// Define the types for project and technology icons
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
  | 'Clerk.js'
  | 'Supabase'
  | 'Shadn UI'
  | 'Axios'
  | 'Gemini AI'
  | 'Neon Postgres'
  | 'Drizzle'
  | 'React Hook Speech to Text'
  | 'React Webcam'
  | 'Lucide React'
  | 'HTML'
  | 'JavaScript'
  | 'Bootstrap'
  | 'PHP'
  | 'Nodemailer'
  | 'Emotion'
  | 'Framer Motion'
  | 'React Spinners'
  | 'React Hot Toast'
  | 'AI'
  | 'Music Recommendation'
  | 'Movie Suggestions'
  | 'Content Creation'
  | 'Tech Innovation'
  | 'Web Development'
  | 'SaaS'
  | 'File Storage'
  | 'UI/UX Design'
  | 'MUI'
  | 'React'
  | 'Vercel'
  | 'Express'
  | 'Firebase'
  | 'React Icons'
  | 'Multer'
  | 'Nodemon'
  | 'UUID'
  | 'Auth0'
  | 'ShadCN UI'
  | 'Clerk'
  | 'Socket.IO'
  | 'Redux'
  | 'Toast Notifications'
  | 'Helmet'
  | 'Morgan'
  | 'Gemini AI'

// Define icons for technologies
const technologyIcons: Record<Technology, JSX.Element> = {
  'Gemini AI': <TbApi />, // Using a generic API icon (Tabler Icons)
  'ShadCN UI': <MdWidgets />, // UI library icon
  Clerk: <SiClerk />, // Clerk official icon
  Supabase: <SiSupabase />, // Supabase official icon
  Express: <SiExpress />, // Express official icon
  'React Icons': <RiReactjsLine />, // Alternative React icon
  Multer: <AiOutlineFile />, // Generic file icon for Multer
  Axios: <AiOutlineApi />, // Generic API/network icon for Axios
  Nodemon: <FaTerminal />, // Terminal icon for Nodemon
  'Lucide React': <AiOutlineBranches />, // Generic branches icon for Lucide React
  React: <SiReact />, // Official React icon
  Firebase: <BiLogoFirebase />,

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
  'Clerk.js': <AiFillGithub className="inline-block w-6 h-6 mr-2 text-black" />, // Placeholder icon
  'Shadn UI': (
    <SiShadcnui className="inline-block w-6 h-6 mr-2 text-gray-600" />
  ),

  'Neon Postgres': (
    <FaDatabase className="inline-block w-6 h-6 mr-2 text-gray-600" />
  ), // Placeholder icon
  Drizzle: <AiFillGithub className="inline-block w-6 h-6 mr-2 text-black" />, // Placeholder icon
  'React Hook Speech to Text': (
    <AiFillGithub className="inline-block w-6 h-6 mr-2 text-black" />
  ), // Placeholder icon
  'React Webcam': (
    <AiFillGithub className="inline-block w-6 h-6 mr-2 text-black" />
  ), // Placeholder icon

  HTML: <FaCss3Alt className="inline-block w-6 h-6 mr-2 text-blue-400" />, // Placeholder icon
  JavaScript: (
    <FaJsSquare className="inline-block w-6 h-6 mr-2 text-yellow-600" />
  ), // Placeholder icon
  Bootstrap: <FaReact className="inline-block w-6 h-6 mr-2 text-purple-600" />, // Placeholder icon
  PHP: <BiLogoPhp className="inline-block w-6 h-6 mr-2 text-blue-600" />,
  Nodemailer: <FaReact className="inline-block w-6 h-6 mr-2 text-blue-500" />, // Placeholder icon
  Emotion: <FaReact className="inline-block w-6 h-6 mr-2 text-pink-600" />, // Placeholder icon
  'Framer Motion': (
    <FaReact className="inline-block w-6 h-6 mr-2 text-green-600" />
  ), // Placeholder icon
  'React Spinners': (
    <FaReact className="inline-block w-6 h-6 mr-2 text-indigo-600" />
  ), // Placeholder icon
  'React Hot Toast': (
    <FaReact className="inline-block w-6 h-6 mr-2 text-orange-600" />
  ), // Placeholder icon
  AI: <GiClapperboard className="inline-block w-6 h-6 mr-2 text-yellow-600" />, // Placeholder icon
  'Music Recommendation': (
    <GiClapperboard className="inline-block w-6 h-6 mr-2 text-purple-600" />
  ), // Placeholder icon
  'Socket.IO': <FaServer />,
  'Movie Suggestions': (
    <GiClapperboard className="inline-block w-6 h-6 mr-2 text-red-600" />
  ), // Placeholder icon
  'Content Creation': (
    <GiClapperboard className="inline-block w-6 h-6 mr-2 text-teal-600" />
  ), // Placeholder icon
  'Tech Innovation': (
    <GiSandsOfTime className="inline-block w-6 h-6 mr-2 text-gray-600" />
  ), // Placeholder icon
  'Web Development': (
    <GiSandsOfTime className="inline-block w-6 h-6 mr-2 text-blue-600" />
  ), // Placeholder icon
  SaaS: <GiSandsOfTime className="inline-block w-6 h-6 mr-2 text-green-600" />, // Placeholder icon
  'File Storage': (
    <FaDatabase className="inline-block w-6 h-6 mr-2 text-gray-600" />
  ),
  'UI/UX Design': (
    <FaReact className="inline-block w-6 h-6 mr-2 text-pink-500" />
  ), // Placeholder icon
  MUI: <TbBrandVercel className="inline-block w-6 h-6 mr-2 text-blue-600" />, // Placeholder icon
  Vercel: <TbBrandVercel className="inline-block w-6 h-6 mr-2 text-blue-600" />,

  UUID: <AiOutlineRead className="inline-block w-6 h-6 mr-2 text-gray-600" />, // Placeholder icon
  Auth0: <SiAuth0 className="inline-block w-6 h-6 mr-2 text-blue-700" />,

  Redux: <SiRedux className="inline-block w-6 h-6 mr-2 text-purple-600" />,
  'Toast Notifications': (
    <MdOutlineNotifications className="inline-block w-6 h-6 mr-2 text-orange-600" />
  ),
  Helmet: <AiOutlineRead className="inline-block w-6 h-6 mr-2 text-gray-600" />, // Placeholder icon
  Morgan: <AiOutlineRead className="inline-block w-6 h-6 mr-2 text-gray-600" />, // Placeholder icon
}

const projects: Project[] = [
  {
    title: 'Brain Buster',
    description:
      'This website allows users to create multiple-choice quizzes with the help of AI and also provides the functionality for users to attempt quizzes created by others. The platform leverages AI to generate questions and answers, making quiz creation more efficient and engaging.',
    technologies: ['Next.js', 'Node.js', 'Express', 'Firebase', 'Gemini AI'],
    link: 'https://brain-buster-seven.vercel.app',
    image: '/8.png',
  },
  {
    title: 'Cloud Cabinet',
    description:
      'Cloud Cabinet is a Next.js-powered file storage web application utilizing Supabase for database management, Auth0 for authentication, and Shadcn UI components for a sleek user interface. It allows users to effortlessly upload, organize, and share files. Key features include secure file storage, easy drag-and-drop uploads, efficient file management with folders and tags, and Supabase storage to store files and retrieve download URLs. Cloud Cabinet ensures data security and provides a reliable solution for personal and professional file management.',
    technologies: ['Next.js', 'Supabase', 'Auth0', 'UI/UX Design'],
    link: 'https://file-storage-web-application.vercel.app/',
    image: '/1.png',
  },

  {
    title: 'Quick Suggest',
    description:
      'Quick Suggest is your go-to AI-powered platform for tailored suggestions and content creation. Whether you need music recommendations, movie suggestions, content editing, summarizing content, or hashtags, Quick Suggest has you covered. Future enhancements include an AI-driven code helper and improved AI services.',
    technologies: [
      'Gemini AI',
      'React Icons',
      'Lucide React',
      'Firebase',
      'Node.js',
      'Express',
      'Next.js',
      'Tailwind CSS',
      'SaaS',
    ],
    link: 'https://sass-ai-next-js-14.vercel.app/',
    image: '/12.png',
  },
]

interface Project {
  title: string
  description: string
  technologies: Technology[]
  link: string
  image: string
}

const SomeProjects: FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4   gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg shadow-lg flex flex-col border-2 border-slate-600"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="flex flex-col flex-grow">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-balance">
                    {project.description}
                  </p>
                  <div className=" flex flex-col gap-3">
                    {' '}
                    <h6 className=" block">Tech Stack</h6>
                    <div className="flex flex-wrap gap-3 mb-4 ">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center text-sm gap-2 "
                        >
                          <span>{technologyIcons[tech]}</span>{' '}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-center bg-teal-500 text-white rounded hover:bg-teal-600"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SomeProjects
