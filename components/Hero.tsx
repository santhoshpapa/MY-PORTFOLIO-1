
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 space-y-8 max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500">
            <img
              src="./SP1.jpeg?auto=format&fit=crop&w=300&q=80"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-slate-950"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-blue-400 font-mono tracking-tighter text-lg">Hello, I'm SANTHOSH</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic tracking-tight leading-none">
            WEB <span className="gradient-text">DEVELOPER</span> & <br />
            <span className="text-purple-400">DESIGNER</span>
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
          A Web Developer & Designer will create a website that is both attractive and functional by designing an appealing layout and style and coding features so the site functions smoothly and efficiently-creatively.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a href="./CERTIFICATION/SANTHOSH K RESUME.pdf" className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-all transform hover:scale-105">
           RESUME
          </a>
         
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
