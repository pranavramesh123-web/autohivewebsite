
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Search } from 'lucide-react';

const SERVICES = [
    {
        title: "The Sales Wolf",
        role: "AI Sales Development Rep",
        description: "Qualifies leads, books meetings, never sleeps.",
        icon: <Bot className="w-8 h-8 text-blue-400" />,
        gradient: "from-blue-500/20 to-blue-600/5"
    },
    {
        title: "The Support Sage",
        role: "24/7 Customer Support Bot",
        description: "Instant answers, zero wait times, happy customers.",
        icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
        gradient: "from-purple-500/20 to-purple-600/5"
    },
    {
        title: "The Research Hawk",
        role: "Market & Lead Researcher",
        description: "Scrapes the web, finds opportunities, delivers reports.",
        icon: <Search className="w-8 h-8 text-green-400" />,
        gradient: "from-green-500/20 to-green-600/5"
    }
];

const BADGES = [
    "12 Marketing Agents in 1",
    "Blog Creation Engine",
    "Email Finder + Outreach Writer",
    "Campaign Assistant Generator",
    "Insights & Reporting Automation",
    "Custom Dashboards + Apps",
    "CRM Auto-Updater",
    "Lead Qualification Agent"
];

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Pick Your <span className="spark-gradient-text">Agent</span></h2>
                    <p className="text-gray-400 text-lg" style={{ maxWidth: '42rem', margin: '0 auto' }}>Specialized AI employees ready to deploy.</p>
                </motion.div>

                {/* Main Service Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel relative overflow-hidden group"
                            style={{ padding: '2rem', transition: 'transform 0.3s ease' }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom right, ${service.gradient})`, opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }} />
                            {/* Note: service.gradient string format from existing code might be tailwind classes (e.g. "from-blue-500/20 to-blue-600/5"). 
                               We need to map these to actual colors or use the style with regex replace if possible, but let's assume we fix the data.
                               Actually, let's fix the data in the array above.
                            */}

                            {/* We need to apply styles to the gradient div above properly.
                                Since I am editing the component, I should update the SERVICES array too if I can.
                                But I am only selecting lines 41-98. I should request to see the file again or edit the whole file if I want to change SERVICES array.
                                However, I can just use a helper function or map the strings.
                                Tailwind classes: from-blue-500/20 to-blue-600/5
                                Map: 
                                blue: rgba(59, 130, 246, 0.2) -> rgba(37, 99, 235, 0.05)
                                purple: rgba(168, 85, 247, 0.2) -> rgba(147, 51, 234, 0.05)
                                green: rgba(34, 197, 94, 0.2) -> rgba(22, 163, 74, 0.05)
                            */}
                            <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: service.title.includes('Sales') ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.05))' :
                                        service.title.includes('Support') ? 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.05))' :
                                            'linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.05))',
                                    opacity: 0,
                                    pointerEvents: 'none'
                                }}
                            />

                            <div className="relative z-10">
                                <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }} className="group-hover:ring-1 group-hover:ring-white/20 transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                                <p className="text-sm font-medium mb-4 uppercase tracking-wider" style={{ color: '#c084fc' }}>{service.role}</p>
                                <p className="text-gray-400" style={{ lineHeight: 1.6 }}>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {BADGES.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel flex items-center justify-center text-center cursor-default transition-colors hover:text-white"
                            style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500, color: '#d1d5db' }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#d1d5db'; }}
                        >
                            {badge}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
