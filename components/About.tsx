
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-slate-900/50 rounded-3xl my-12 backdrop-blur-sm border border-white/5">
            <div className="flex flex-col md:flex-row gap-16">

                {/* Profile Image / Left Column */}
                <div className="md:w-1/3 flex flex-col items-center text-center space-y-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        {/* Placeholder for user image if they have one, otherwise a gradient or initial */}
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-5xl font-serif italic text-slate-500">
                            <img src="./SP1.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-serif italic">SANTHOSH K</h3>
                        <p className="text-blue-400 font-mono text-sm mt-1">Web Developer & Designer</p>
                    </div>

                    <div className="flex gap-4 justify-center w-full">
                        <div className="text-center px-4 py-2 bg-white/5 rounded-xl border border-white/10 w-full hover:bg-white/10 transition-colors">
                            <div className="text-2xl font-bold text-white">Fresher</div>
                            <div className="text-[10px] uppercase text-slate-400 tracking-wider">Years Exp.</div>
                        </div>
                        <div className="text-center px-4 py-2 bg-white/5 rounded-xl border border-white/10 w-full hover:bg-white/10 transition-colors">
                            <div className="text-2xl font-bold text-white">20+</div>
                            <div className="text-[10px] uppercase text-slate-400 tracking-wider">Projects</div>
                        </div>
                    </div>
                </div>

                {/* Details / Right Column */}
                <div className="md:w-2/3 space-y-12">

                    {/* Resume Basics / About Me */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6 flex items-center gap-4">
                            <span className="text-blue-500">01.</span> About Me
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-lg mb-6">
                            I am a passionate Web Developer and Designer dedicated to building seamless, user-centric digital experiences. With a strong foundation in both design principles and modern coding practices, I bridge the gap between aesthetics and functionality.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-500">Name</span>
                                <span className="text-slate-200 font-medium">SANTHOSH K</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-500">Email</span>
                                <span className="text-slate-200 font-medium">santhoshlovely003@gmail.com</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-500">Role</span>
                                <span className="text-slate-200 font-medium">Developer & Designer</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-500">Location</span>
                                <span className="text-slate-200 font-medium"> <br />103, KARUMAGOUNDEN PUTHUR,VARATHANALLUR(PO),BHAVANI, ERODE-638311.</span>
                            </div>
                        </div>
                    </div>

                    {/* Family Details - As Requested */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6 flex items-center gap-4">
                            <span className="text-purple-500">02.</span> Family Details
                        </h2>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">

                            <div className="space-y-3">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" x2="23" y1="8" y2="11" /><line x1="23" x2="20" y1="11" y2="11" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Father's Name</div>
                                        <div className="text-slate-200 font-medium">[KOMARASAMY L]</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9 0 0 0 9 9Z" /><path d="M12 3v18" /><path d="M12 14h.01" /><path d="M12 10h.01" /><path d="M12 6h.01" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Mother's Name</div>
                                        <div className="text-slate-200 font-medium">[IYYAMMAL K ]</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Siblings</div>
                                        <div className="text-slate-200 font-medium">[NITHYA, SANTHIYA]</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education - College & School */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6 flex items-center gap-4">
                            <span className="text-green-500">03.</span> Education
                        </h2>

                        <div className="space-y-6">
                            {/* College */}
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-slate-200">Master of Science in Computer Science</h3>
                                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit">2024 - 2026</span>
                                </div>
                                <p className="text-slate-400 mb-1">[GOVT ARTS AND SCIENCE COLLEGE], [KOMARAPALAYAM]</p>
                                <p className="text-slate-500 text-sm">CGPA: 7.5/10</p>
                            </div>

                            {/* College */}
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-slate-200">Bachelor of Science in Computer Science</h3>
                                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit">2021 - 2024</span>
                                </div>
                                <p className="text-slate-400 mb-1">[SRI VASAVI COLLEGE (AIDED)], [ERODE]</p>
                                <p className="text-slate-500 text-sm">CGPA: 8.0/10</p>
                            </div>

                            {/* School */}
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-slate-200">Higher Secondary Education</h3>
                                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full w-fit">2020 - 2021</span>
                                </div>
                                <p className="text-slate-400 mb-1">[GOVERMENT HIGHER SECONDARY SCHOOL], [MYLAMBADI]</p>
                                <p className="text-slate-500 text-sm">Score: 77%</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
