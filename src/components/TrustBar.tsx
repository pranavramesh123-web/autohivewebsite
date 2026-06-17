
import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
    { name: 'OpenAI', color: 'bg-green-500/20 text-green-400' },
    { name: 'Zapier', color: 'bg-orange-500/20 text-orange-400' },
    { name: 'Make', color: 'bg-purple-500/20 text-purple-400' },
    { name: 'Pinecone', color: 'bg-blue-500/20 text-blue-400' },
    { name: 'Python', color: 'bg-yellow-500/20 text-yellow-400' },
    { name: 'HubSpot', color: 'bg-orange-600/20 text-orange-500' },
];

const TrustBar: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-12 relative overflow-hidden"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.5)' }}
        >
            <div className="container mb-8 text-center">
                <p className="text-sm font-medium" style={{ color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Powering workflows with</p>
            </div>

            <div className="flex overflow-hidden relative">
                <div className="flex items-center animate-infinite-scroll whitespace-nowrap" style={{ columnGap: '4rem', padding: '0 1rem' }}>
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                        <div key={index} className="flex items-center gap-3" style={{ opacity: 0.5, filter: 'grayscale(100%)', cursor: 'default', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0)'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.filter = 'grayscale(100%)'; }}>
                            {/* Logo Placeholder Icon */}
                            <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.75rem' }} className={logo.color.split(' ')[0] /* Hacky but we removed usage of this anyway, need inline mapping */}>
                                <div style={{
                                    width: '100%', height: '100%', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: logo.name === 'OpenAI' ? 'rgba(34, 197, 94, 0.2)' :
                                        logo.name === 'Zapier' ? 'rgba(249, 115, 22, 0.2)' :
                                            logo.name === 'Make' ? 'rgba(168, 85, 247, 0.2)' :
                                                logo.name === 'Pinecone' ? 'rgba(59, 130, 246, 0.2)' :
                                                    logo.name === 'Python' ? 'rgba(234, 179, 8, 0.2)' : 'rgba(234, 88, 12, 0.2)',
                                    color: logo.name === 'OpenAI' ? '#4ade80' :
                                        logo.name === 'Zapier' ? '#fb923c' :
                                            logo.name === 'Make' ? '#c084fc' :
                                                logo.name === 'Pinecone' ? '#60a5fa' :
                                                    logo.name === 'Python' ? '#facc15' : '#f97316'
                                }}>
                                    {logo.name[0]}
                                </div>
                            </div>
                            <span className="font-bold text-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>{logo.name}</span>
                        </div>
                    ))}
                </div>

                {/* Fade Edges */}
                <div className="absolute top-0 left-0 bottom-0" style={{ width: '8rem', background: 'linear-gradient(to right, black, transparent)', zIndex: 10 }} />
                <div className="absolute top-0 right-0 bottom-0" style={{ width: '8rem', background: 'linear-gradient(to left, black, transparent)', zIndex: 10 }} />
            </div>

            <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </motion.section>
    );
};

export default TrustBar;
