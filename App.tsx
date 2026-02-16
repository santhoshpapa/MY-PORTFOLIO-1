import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillChart from './components/SkillChart';
import Contact from './components/Contact';
import { PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        <Hero />

        {/* About Section */}
        <About />

        {/* Work Section */}
        <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <p className="text-blue-400 font-mono text-sm uppercase mb-2">MY PROFILE</p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold italic">Selected Certifications</h2>
            </div>
            <p className="max-w-md text-slate-400 text-right">
              A collection of projects where design meets code. Built with a focus on performance, accessibility, and Extra Activity Certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <a
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className={`group relative glass rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 block ${!project.link ? 'cursor-default pointer-events-none' : ''}`}
              >
                <div className={`aspect-[4/3] overflow-hidden flex ${project.align === 'center' ? 'justify-center items-center' : ''}`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ width: project.width || '100%', height: project.height || '100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                </div>

                <div className="p-8 absolute bottom-0 left-0 right-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest bg-blue-500/30 text-blue-200 px-2 py-1 rounded font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{project.title}</h3>
                  <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 drop-shadow-md">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-purple-400 font-mono text-sm uppercase mb-2">Technical Proficiency</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold italic">My Toolset</h2>
              </div>

              <div className="space-y-6">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-slate-300">{skill.name}</span>
                      <span className="text-sm font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full"></div>
              <SkillChart />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2024 Creative Canvas Portfolio. Made with React.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
