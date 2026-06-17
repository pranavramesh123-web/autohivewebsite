
import React from 'react';
import { motion } from 'framer-motion';

const VALIDATIONS = [
    {
        name: "Sarah K.",
        role: "Growth Manager",
        quote: "AutoHive replaced 15+ hours of admin every week. The agents feel like real employees.",
        initial: "S"
    },
    {
        name: "Daniel R.",
        role: "Founder",
        quote: "We went from manual outreach to a fully automated lead system. Meetings started booking within days.",
        initial: "D"
    },
    {
        name: "Priya M.",
        role: "Marketing Lead",
        quote: "The dashboard is insanely clean. It feels like having a control room for our entire marketing.",
        initial: "P"
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 relative" style={{ background: 'linear-gradient(to top, black, rgba(88, 28, 135, 0.1))' }}>
            <div className="container" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Trusted by teams who <br /><span style={{ textDecoration: 'line-through', textDecorationColor: '#ef4444', textDecorationThickness: '4px', color: '#6b7280' }}>hate</span> busy work.</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {VALIDATIONS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel flex flex-col justify-between"
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <span key={i} style={{ color: '#eab308', fontSize: '1.125rem' }}>★</span>
                                    ))}
                                </div>
                                <p className="text-lg italic" style={{ color: '#e5e7eb', lineHeight: 1.6 }}>"{item.quote}"</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div style={{ width: '3rem', height: '3rem', borderRadius: '9999px', background: 'linear-gradient(to top right, #3b82f6, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
                                    {item.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
