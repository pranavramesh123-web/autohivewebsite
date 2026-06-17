
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
    return (
        <section id="process" className="py-24 relative">
            <div className="container" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">3 Steps to Automation.</h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden-mobile absolute" style={{ top: '40px', left: '16%', right: '16%', height: '2px', background: 'linear-gradient(90deg, #1e3a8a, #581c87, #1e3a8a)', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: <Search style={{ width: '2rem', height: '2rem' }} />, title: "Audit", text: "We analyze your workflows (Free)." },
                            { icon: <Code2 style={{ width: '2rem', height: '2rem' }} />, title: "Build", text: "We engineer your custom agents (Sprint)." },
                            { icon: <Rocket style={{ width: '2rem', height: '2rem' }} />, title: "Deploy", text: "You launch and scale (Magic)." }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="relative z-10 text-center group"
                            >
                                <div className="glass-panel text-purple-400 group-hover:scale-110 transition-transform duration-300" style={{ width: '5rem', height: '5rem', margin: '0 auto 1.5rem auto', background: 'black', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.5s ease' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(168,85,247,0.2)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
