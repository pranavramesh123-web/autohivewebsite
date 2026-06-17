
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Users } from 'lucide-react';

const ProblemSection: React.FC = () => {
    const problems = [
        {
            icon: <Users style={{ width: '2rem', height: '2rem', color: '#f87171' }} />,
            title: "Leads going cold",
            description: "Potential clients slip away while you sleep or handle other tasks."
        },
        {
            icon: <Clock style={{ width: '2rem', height: '2rem', color: '#f87171' }} />,
            title: "Hours lost to admin",
            description: "Valuable time wasted on copy-pasting data instead of strategy."
        },
        {
            icon: <AlertCircle style={{ width: '2rem', height: '2rem', color: '#f87171' }} />,
            title: "Inconsistent Support",
            description: "Missed messages and slow replies damage your reputation."
        }
    ];

    return (
        <section id="problem" className="py-24 relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Still Trapped in the <span style={{ color: '#ef4444' }}>Admin Loop?</span>
                    </h2>
                    <p className="text-gray-400 text-lg" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                        The hidden cost of manual work is slowing down your growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel relative overflow-hidden group"
                            style={{ padding: '2rem', transition: 'border-color 0.3s ease' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                        >
                            {/* Subtle Red Glow */}
                            <div className="absolute inset-0 group-hover:opacity-100" style={{ background: 'rgba(239, 68, 68, 0.05)', opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }} />
                            {/* Note: group-hover needs parent group class which we have, but opacity class might not work without Tailwind. Let's rely on style tag or hover logic. Actually the above onMouseEnter covers border. For background glow, let's use a style block or specific class */}
                            <style>{`
                                .problem-card:hover .problem-glow { opacity: 1 !important; }
                                .problem-card:hover .problem-icon { transform: scale(1.1); }
                             `}</style>
                            <div className="problem-glow absolute inset-0" style={{ background: 'rgba(239, 68, 68, 0.05)', opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }} />

                            <div className="relative z-10 problem-card">
                                <div className="problem-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300" style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: 'rgba(239, 68, 68, 0.1)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400" style={{ lineHeight: 1.6 }}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
