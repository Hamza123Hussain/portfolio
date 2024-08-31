// components/AboutMeSection.js

import {
  CodeBracketSquareIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-200 py-16 mt-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 gap-12 text-justify">
          <div>
            <p className="text-lg mb-4">
              Hi, I am Hamza Hussain, a web developer based in Lahore, Pakistan.
              I hold a Bachelor of Science in Computer Science from the
              University of Lahore.
            </p>
            <p className="text-lg mb-4">
              I specialize in creating dynamic and engaging web applications. My
              expertise spans both frontend and backend development. On the
              frontend, I utilize Next.js and React.js to build interactive user
              interfaces, while my backend development focuses on Node.js and
              Express.js to create scalable server-side solutions.
            </p>
            <p className="text-lg mb-4">
              I am passionate about continuous learning and applying new
              technologies to solve real-world problems. My goal is to build
              efficient, innovative, and user-centric solutions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>REST API</span>
              </div>
              <div className="flex items-center gap-3">
                <CloudIcon className="h-6 w-6 text-teal-400" />
                <span>Firebase</span>
              </div>
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-3">
                <DevicePhoneMobileIcon className="h-6 w-6 text-teal-400" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>Express.js</span>
              </div>
              <div className="flex items-center gap-3">
                <CloudIcon className="h-6 w-6 text-teal-400" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-3">
                <WrenchScrewdriverIcon className="h-6 w-6 text-teal-400" />
                <span>Supabase</span>
              </div>
              <div className="flex items-center gap-3">
                <WrenchScrewdriverIcon className="h-6 w-6 text-teal-400" />
                <span>MongoDB</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <ShieldCheckIcon className="h-6 w-6 text-teal-400" />
                <span>API Integration</span>
              </div> */}
              {/* <div className="flex items-center gap-3">
                <CloudIcon className="h-6 w-6 text-teal-400" />
                <span>OAuth</span>
              </div> */}
              <div className="flex items-center gap-3">
                <DocumentTextIcon className="h-6 w-6 text-teal-400" />
                <span>ESLint</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <WrenchScrewdriverIcon className="h-6 w-6 text-teal-400" />
                <span>NoSQL</span>
              </div> */}
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>CSS</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>Redux</span>
              </div> */}
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <CodeBracketSquareIcon className="h-6 w-6 text-teal-400" />
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-3">
                <DocumentTextIcon className="h-6 w-6 text-teal-400" />
                <span>ClerkJS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
