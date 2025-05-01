import { SectionTitle } from "../../widgets/SectionTitle/SectionTitle";

export const Skills = () => {
  return (
    <section className="pt-8 bg-gradient-to-b from-slate-50 to-slate-100 py-12 h-screen min-h-[700px] relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <SectionTitle title="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-100 hover:bg-blue-100 transition-all">TypeScript</span>
              <span className="skill-tag bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm border border-yellow-100 hover:bg-yellow-100 transition-all">JavaScript</span>
              <span className="skill-tag bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-100 hover:bg-green-100 transition-all">Node.js</span>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Frontend Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm border border-cyan-100 hover:bg-cyan-100 transition-all">React</span>
              <span className="skill-tag bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-100 hover:bg-slate-100 transition-all">Next.js</span>
              <span className="skill-tag bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm border border-emerald-100 hover:bg-emerald-100 transition-all">Vue</span>
              <span className="skill-tag bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-100 hover:bg-green-100 transition-all">Nuxt</span>
              <span className="skill-tag bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm border border-sky-100 hover:bg-sky-100 transition-all">Tailwind</span>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Backend Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm border border-red-100 hover:bg-red-100 transition-all">Nest</span>
              <span className="skill-tag bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-sm border border-violet-100 hover:bg-violet-100 transition-all">Prisma</span>
              <span className="skill-tag bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-100 hover:bg-blue-100 transition-all">Docker</span>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M9 17v-6 M12 17v-8 M15 17v-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-100 hover:bg-green-100 transition-all">MongoDB</span>
              <span className="skill-tag bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-100 hover:bg-blue-100 transition-all">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}