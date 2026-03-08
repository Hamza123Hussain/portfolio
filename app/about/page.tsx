import {
  CpuChipIcon,
  BoltIcon,
  Square3Stack3DIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Column: Narrative */}
          <div className="md:w-3/5">
            <h2 className="text-4xl font-extrabold mb-6 text-teal-400">
              Architecting the Future of Web Ecosystems
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-300">
              Hi, I’m{' '}
              <span className="text-white font-semibold">Hamza Hussain</span>, a{' '}
              <span className="text-teal-400">Strategic Technical Lead</span>{' '}
              based in Lahore, specialized in delivering high-concurrency
              applications.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-400">
              Currently leading engineering at{' '}
              <span className="text-white font-medium">Octtoppus</span>, I
              bridge the gap between business strategy and high-level
              architecture. I have a proven track record of managing the full
              SDLC for diverse organizations, ensuring seamless transitions from
              MVP to global scale.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-400">
              My expertise lies in building{' '}
              <strong>intelligence-driven tools</strong>, from multi-region CRM
              ecosystems to AI-powered assessment portals utilizing Python
              microservices and LLM integration.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                'Next.js 15+',
                'Node.js',
                'Python / DeepSeek AI',
                'TypeScript',
                'System Architecture',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="md:w-2/5 grid grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <ChartBarIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Leadership
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Leading cross-functional teams and technical roadmaps.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <CpuChipIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                AI Intelligence
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Deploying DeepSeek AI for automated grading.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <Square3Stack3DIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Architecture
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Engineering multi-region CRM and HRM systems.
              </p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors group">
              <BoltIcon className="h-8 w-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white uppercase text-xs tracking-widest">
                Performance
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Optimizing for high concurrency and SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
