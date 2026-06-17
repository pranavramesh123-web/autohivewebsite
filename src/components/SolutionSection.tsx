
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Sparkles, BarChart } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section id="solution" className="py-24 relative" style={{ background: 'linear-gradient(to bottom, black, rgba(30, 58, 138, 0.1))' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Input <span style={{ margin: '0 1rem', color: '#6b7280' }}>→</span> <span className="spark-gradient-text">Magic</span> <span style={{ margin: '0 1rem', color: '#6b7280' }}>→</span> Output
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden-mobile absolute" style={{ top: '60px', left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)' }} />

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {/* Step 1: Input */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div style={{ width: '8rem', height: '8rem', margin: '0 auto 2rem auto', background: 'black', border: '1px solid #1f2937', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                                <Database style={{ width: '3rem', height: '3rem', color: '#9ca3af' }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Your Messy Data</h3>
                            <p className="text-gray-400">Emails, Sheets, PDFs, CRM data</p>
                        </motion.div>

                        {/* Step 2: Magic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="animate-pulse-glow" style={{ width: '8rem', height: '8rem', margin: '0 auto 2rem auto', background: 'black', border: '1px solid #8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}>
                                <Sparkles style={{ width: '3rem', height: '3rem', color: '#c084fc' }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 spark-gradient-text">We Build The Logic</h3>
                            <p className="text-gray-400">Intelligent processing & automation</p>
                        </motion.div>

                        {/* Step 3: Output */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-center"
                        >
                            <div style={{ width: '8rem', height: '8rem', margin: '0 auto 2rem auto', background: 'black', border: '1px solid #3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, boxShadow: '0 0 30px rgba(59,130,246,0.3)' }}>
                                <BarChart style={{ width: '3rem', height: '3rem', color: '#60a5fa' }} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Perfect Results</h3>
                            <p className="text-gray-400">Reports, booked meetings, dashboards</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
