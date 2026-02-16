
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 right-6 z-50 w-auto">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl">
        <a href="#home" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest">Home</a>
        <a href="#work" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest">CERTIFICATION</a>
        <a href="#skills" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest">Skills</a>
        <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
