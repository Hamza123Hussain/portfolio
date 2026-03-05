import {
  CodeBracketSquareIcon,
  CpuChipIcon, // Added for AI/Modern feel
  BoltIcon, // Added for Performance/Next.js
  Square3Stack3DIcon, // Added for Full-Stack
  GlobeAsiaAustraliaIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Column: Story */}
          <div className="md:w-3/5">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-400">
              Building the Future with Code
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-300">
              Hi, I’m{' '}
              <span className="text-white font-semibold">Hamza Hussain</span>, a
              Software Engineer based in Lahore, specialized in crafting
              high-performance, full-stack applications.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-400">
              With a CS degree from the University of Lahore and a deep passion
              for the **Next.js ecosystem**, I don’t just build websites—I build
              scalable digital experiences. My focus lies in bridging the gap
              between sophisticated backend logic and intuitive, pixel-perfect
              frontends.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-400">
              Currently, I am focused on mastering **AI integration, Serverless
              architectures, and Real-time data syncing**. Whether it’s a
              high-traffic SaaS dashboard or an AI-driven automation tool, I
              thrive on solving the impossible problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-800 border border-teal-500/30 rounded-full text-teal-400 text-sm">
                Next.js 15+
              </span>
              <span className="px-4 py-2 bg-gray-800 border border-teal-500/30 rounded-full text-teal-400 text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-gray-800 border border-teal-500/30 rounded-full text-teal-400 text-sm">
                AI SDKs
              </span>
              <span className="px-4 py-2 bg-gray-800 border border-teal-500/30 rounded-full text-teal-400 text-sm">
                PostgreSQL
              </span>
            </div>
          </div>

          {/* Right Column: Visual/Stats */}
          <div className="md:w-2/5 grid grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <BoltIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Performance
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Obsessed with Core Web Vitals and SEO.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <CpuChipIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Intelligence
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Integrating LLMs into modern workflows.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <Square3Stack3DIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Full-Stack
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                End-to-end development from DB to UI.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <BeakerIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Scalability
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Writing clean, maintainable, modular code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
