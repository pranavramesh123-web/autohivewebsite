
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-16 relative overflow-hidden"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'black' }}
        >
            {/* Footer Gradient Glow */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(88, 28, 135, 0.1), transparent)', pointerEvents: 'none' }} />

            <div className="container relative z-10" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', background: 'linear-gradient(to top right, #3b82f6, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem' }}>
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="font-heading font-bold text-2xl" style={{ letterSpacing: '-0.025em' }}>AutoHive</span>
                        </div>
                        <p className="text-gray-400 mb-6" style={{ maxWidth: '24rem' }}>
                            Engineered for the future of work. We build the intelligent infrastructure that powers the next generation of business.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href={i === 2 ? "mailto:hello@autohive.com" : "#"} className="glass-panel flex items-center justify-center transition-colors hover:bg-white/10" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.05)' }}>
                                    <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                            <li><a href="#roi" className="hover:text-white transition-colors">Case Studies</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p>© 2026 AutoHive. Engineered with Magic.</p>
                    <p>hello@autohive.com</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
