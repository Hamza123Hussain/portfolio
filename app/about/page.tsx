// components/AboutMeSection.js

import {
  CodeBracketSquareIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-200 py-16 mt-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <p className="text-lg mb-4">
              Hi, I am Hamza Hussain, a web developer based in Lahore, Pakistan.
              I hold a Bachelor of Science in Computer Science from the
              University of Lahore.
            </p>
            <p className="text-lg mb-4">
              As a recent graduate, I have dedicated my time to mastering web
              development technologies and building a strong foundation in both
              frontend and backend development. My academic projects and
              personal endeavors have given me hands-on experience with tools
              like React.js, Next.js, Express.js, and Node.js.
            </p>
            <p className="text-lg mb-4">
              I am passionate about creating dynamic and responsive web
              applications. I am continuously learning and applying new
              technologies to solve real-world problems and build innovative
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg mb-4">
              My journey in web development began with a fascination for
              technology and a desire to build things from scratch. I enjoy
              working on diverse projects that challenge me to think creatively
              and solve complex problems. My goal is to continue growing as a
              developer and contribute to impactful projects.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <CodeBracketSquareIcon className="h-8 w-8 text-teal-400" />
              <CloudIcon className="h-8 w-8 text-teal-400" />
              <DevicePhoneMobileIcon className="h-8 w-8 text-teal-400" />
              <WrenchScrewdriverIcon className="h-8 w-8 text-teal-400" />
              <DocumentTextIcon className="h-8 w-8 text-teal-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
