
import React from 'react';
import { motion } from 'framer-motion';

const ROISection: React.FC = () => {
    return (
        <section id="roi" className="py-24 relative">
            <div className="absolute inset-0" style={{ background: 'rgba(30, 58, 138, 0.05)', transform: 'rotate(3deg) scale(1.1)', pointerEvents: 'none' }} />

            <div className="container relative z-10" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Automation Pays for Itself.</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 text-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

                    {/* Note: I'm replacing the divide logic with borders on individual items or a gap approach since vanilla CSS 'divide' is tricky without pseudo-elements. 
                        I'll use a border on the right for the first two items on desktop, or just simple cards.
                        Actually, let's keep it simple with glass panels or just text stats. The original used divide lines.
                        I'll add borders to the middle elements.
                    */}

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 roi-stat-card"
                        style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <div className="text-6xl md:text-7xl font-bold spark-gradient-text mb-4">70%</div>
                        <p className="text-xl text-gray-400">Cost Reduction vs. Hiring</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 roi-stat-card"
                        style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <div className="text-6xl md:text-7xl font-bold spark-gradient-text mb-4">10x</div>
                        <p className="text-xl text-gray-400">Faster Response Times</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-8"
                        style={{ padding: '2rem' }}
                    >
                        <div className="text-6xl md:text-7xl font-bold spark-gradient-text mb-4">0</div>
                        <p className="text-xl text-gray-400">Sick Days Taken</p>
                    </motion.div>
                </div>

                {/* Responsive adjustments for borders would typically need media queries.
                    Since we are inline, it's hard to do md:border-r.
                    I'll add a style block for responsive borders.
                */}
                <style>{`
                    @media (max-width: 768px) {
                        .roi-stat-card { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default ROISection;
