import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

    const handleSubmit = () => {
        // FormSubmit handles everything automatically
        setStatus('submitting');
    };

    return (
        <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-7xl font-serif font-bold italic mb-8">
                    Let's build <span className="gradient-text">the future</span> together.
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                    Currently available for freelance opportunities or full-time roles in creative front-end Developer.
                </p>
            </div>

            <form
                action="https://formsubmit.co/santhoshlovely003@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 md:p-12 space-y-6"
            >
                {/* FormSubmit Configuration - Hidden Fields */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-300 uppercase tracking-wider">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-6 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-300 uppercase tracking-wider">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-6 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 uppercase tracking-wider">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Tell me about your project or idea..."
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full md:w-auto px-10 py-5 bg-blue-600 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
