// components/ProjectsSection.tsx
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaShieldAlt,
  FaLock,
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
import Image from 'next/image'

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
  | 'Mongoose'
  | 'JWT'
  | 'bcrypt'
  | 'Clerk'
  | 'Socket.IO'
  | 'Redux'
  | 'Toast Notifications'
  | 'Helmet'
  | 'Morgan'
  | 'Gemini AI'

// Define icons for technologies
const technologyIcons: Record<Technology, JSX.Element> = {
  bcrypt: <FaShieldAlt />,
  JWT: <FaLock />,
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
  Mongoose: <FaDatabase className="inline-block w-6 h-6 mr-2 text-green-600" />,
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
    title: 'Thought Flow',
    description:
      'Thought Flow is a dynamic blogging platform designed to empower creativity and foster meaningful discussions. It offers features like blog writing with AI-powered tools, interactive community engagement, and profile customization. Built with Node.js, Express, Next.js, Tailwind CSS, React Icons, and Firebase, Thought Flow bridges traditional blogging with the future of content creation.',
    technologies: [
      'Node.js',
      'Express',
      'Next.js',
      'Tailwind CSS',
      'React Icons',
      'Lucide React',
      'Firebase',
      'Axios',
      'Multer',
      'Nodemon',
      'UUID',
    ],
    link: 'https://thoughtflow-ax6h9mmyi-hamza123hussains-projects.vercel.app/',
    image: '/9.png',
  },
  {
    title: 'Ecommerce Website',
    description:
      'This fully functional e-commerce website redefines online shopping with a seamless experience for browsing products, placing orders, and receiving instant email confirmations. Admins can manage products, orders, and user registrations. Technologies include Next.js, TypeScript, Clerk.js for authentication, Supabase for data management, and various UI/UX enhancements with MUI, Emotion, and Framer Motion.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Clerk.js',
      'Supabase',
      'Nodemailer',
      'Framer Motion',
      'React Spinners',
      'Lucide React',
      'React Hot Toast',
      'Axios',
      'Tailwind CSS',
    ],
    link: 'https://ecommerce-nextjs-tau-vert.vercel.app/',
    image: '/2.png',
  },
  {
    title: 'CharagDin Admin Panel',
    description:
      'The CharagDin Admin Panel is a comprehensive tool for managing furniture inventory. Built with Next.js and React for a responsive UI, Firebase for authentication, and Node.js & Express for the backend. Tailwind CSS ensures a sleek design, while Vercel provides reliable hosting. Features include product and category management, enhancing the operations of CharagDin, a leader in the furniture industry.',
    technologies: [
      'Next.js',
      'React',
      'Firebase',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'Vercel',
    ],
    link: 'https://charagdin-admin.vercel.app/',
    image: '/11.png',
  },
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
    title: 'IntelliResume',
    description:
      'IntelliResume is a Next.js-powered web application that revolutionizes resume building with AI-driven features. Users can effortlessly create detailed resume descriptions with Gemini API’s advanced AI. It offers extensive customization options and easy download formats. Technologies used include Clerk.js, Supabase, Shadn UI, and Axios.',
    technologies: [
      'Next.js',
      'Clerk.js',
      'Supabase',
      'Shadn UI',
      'Axios',
      'Tailwind CSS',
      'React.js',
    ],
    link: 'https://ai-resume-builder-chi.vercel.app/',
    image: '/4.png',
  },
  {
    title: 'Note Secure',
    description:
      'Note Secure is a sophisticated and secure web application designed to elevate your note-taking experience with the latest web technologies. It features powerful search functionality, efficient note organization, an elegant and responsive design, secure authentication, a robust backend, a scalable database, advanced state management, and real-time notifications.',
    technologies: [
      'Next.js',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'ShadCN UI',
      'Clerk',
      'MongoDB',
      'Redux',
      'Toast Notifications',
    ],
    link: 'https://notes-app-node-next.vercel.app/',
    image: '/10.png',
  },
  {
    title: 'MockMaster ProPrep',
    description:
      'MockMaster ProPrep is a Next.js web app transforming job interview preparation with AI. It offers customized mock interviews, real-time speech-to-text using React Hook Speech to Text, and integration of React Webcam for realistic simulations. Technologies include Clerk.js for authentication, Shadn UI for the interface, and Neon Postgres managed through Drizzle for backend support.',
    technologies: [
      'Next.js',
      'Clerk.js',
      'Shadn UI',
      'Gemini AI',
      'Neon Postgres',
      'Drizzle',
      'Lucide React',
      'Tailwind CSS',
      'React.js',
    ],
    link: 'https://mock-interview-web-app.vercel.app/',
    image: '/3.png',
  },
  {
    title: 'ChatStream',
    description:
      'This website allows users to chat with each other in real time and share pictures. It provides a seamless messaging experience with features for sending text and multimedia content, making it ideal for both casual and professional communication.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Socket.IO',
      'Firebase',
    ],
    link: 'https://chatstream-lime.vercel.app',
    image: '/31.png',
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
  {
    title: 'CineScope',
    description:
      'CineScope is an IMDb clone developed with Next.js and Tailwind CSS. It features lightning-speed search, seamless pagination, and visually stunning movie cards. The site provides a smooth and engaging experience for users to explore movies in detail.',
    technologies: ['Next.js', 'Tailwind CSS'],
    link: 'https://imdb-clone-seven-iota.vercel.app/',
    image: '/5.png',
  },
  {
    title: 'File Share Application',
    description:
      'The website allows users to share files with others via email. Users can upload files and specify recipient email addresses to send the files directly through the platform.',
    technologies: ['Next.js', 'Node.js', 'Firebase', 'Nodemailer', 'Clerk'],
    link: 'https://next-js-file-share-application.vercel.app/',
    image: '/7.png',
  },
  {
    title: 'Logo Maker',
    description:
      "This website allows users to create various kinds of logos easily. The platform offers customizable design tools to craft logos tailored to the user's preferences, making it suitable for individuals and businesses looking to create unique branding elements.",
    technologies: [
      'Next.js',
      'React.js',
      // Add any additional technologies used
    ],
    link: 'https://logo-maker-nextjs-bvxb.vercel.app/',
    image: '/13.png',
  },
  {
    title: 'Baig Farm Project',
    description:
      'The website is designed for a cattle organization where buyers can browse available cattle, view detailed information, and contact the organization to purchase. Once a cattle is sold, the organization updates its status to "sold" on the website, ensuring that buyers have access to the most current availability information.',
    technologies: ['Next.js', 'Node.js', 'Firebase'],
    link: 'https://baig-farm-project-ag7l.vercel.app/',
    image: '/6.png',
  },
  {
    title: 'AuctionApex',
    description:
      'AuctionApex is a cutting-edge web application designed to revolutionize online auctions. This project features a user-friendly interface, real-time updates, and robust backend and frontend technologies.',
    image: '/14.png', // Provide an image URL or screenshot if you have one
    link: 'https://auction-apex.vercel.app',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Axios',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Socket.IO',
      'JWT',
      'bcrypt',
    ],
  },
]

interface Project {
  title: string
  description: string
  technologies: Technology[]
  link: string
  image: string
}

const ProjectsSection: FC = () => {
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
              <Image
                width={500}
                height={200}
                src={project.image}
                alt={project.title}
                className="w-full sm:h-[30vh] object-cover"
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

export default ProjectsSection
