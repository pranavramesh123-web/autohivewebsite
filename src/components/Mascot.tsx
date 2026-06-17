
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
    "Hi 👋 Welcome to AutoHive.",
    "We automate the grind so you can scale.",
    "Your business called… it wants AI employees.",
    "Buzz buzz 🐝 Your workflows are about to evolve.",
    "Still doing tasks manually? That’s brave.",
    "You focus on growth. I’ll handle the chaos.",
    "AutoHive: The Magic in the Machine.",
    "Your competitors won’t like what we’re building.",
    "Automation running… productivity increasing dangerously ⚡",
    "Need leads? Need content? Need scale? Easy.",
    "We build dashboards that feel like control rooms.",
    "Let’s turn busy work into button clicks.",
    "AI doesn’t take sick days 😌",
    "Welcome to AutoHive. You’ll love this.",
    "You love the app. We love you."
];

interface MascotProps {
    onClick: () => void;
}

const Mascot: React.FC<MascotProps> = ({ onClick }) => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [showBubble, setShowBubble] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBubble(false);
            setTimeout(() => {
                setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
                setShowBubble(true);
            }, 500); // Wait for fade out
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', pointerEvents: 'none' }}>
            {/* Speech Bubble */}
            <AnimatePresence>
                {showBubble && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        style={{ marginBottom: '1rem', marginRight: '1rem', pointerEvents: 'auto', cursor: 'pointer' }}
                        onClick={onClick}
                    >
                        <div className="glass-panel" style={{ padding: '0.75rem 1rem', maxWidth: '200px', fontSize: '0.875rem', color: '#e5e7eb', position: 'relative' }}>
                            {QUOTES[quoteIndex]}
                            {/* Bubble Tail */}
                            <div style={{ position: 'absolute', bottom: '-0.5rem', right: '1.5rem', width: '1rem', height: '1rem', background: 'rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', transform: 'rotate(45deg)', backdropFilter: 'blur(16px)' }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mascot Character */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                onClick={onClick}
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                <div style={{ position: 'relative', width: '4rem', height: '4rem' }}>
                    {/* Glow Effect */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(168, 85, 247, 0.5)', borderRadius: '9999px', filter: 'blur(20px)' }} />

                    {/* Robot Body */}
                    <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', background: 'linear-gradient(135deg, #1f2937, #000000)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                        {/* Face Screen */}
                        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', right: '0.75rem', bottom: '0.75rem', background: 'black', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            {/* Eyes */}
                            <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: '#c084fc', boxShadow: '0 0 10px rgba(168,85,247,0.8)' }} className="animate-pulse" />
                            <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: '#c084fc', boxShadow: '0 0 10px rgba(168,85,247,0.8)' }} className="animate-pulse" />
                        </div>

                        {/* Antennae */}
                        <div style={{ position: 'absolute', top: '-0.75rem', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '0.75rem', background: '#6b7280' }}>
                            <div style={{ position: 'absolute', top: '-0.25rem', left: '-0.125rem', width: '0.375rem', height: '0.375rem', background: '#3b82f6', borderRadius: '9999px' }} />
                        </div>
                    </div>

                    {/* Wings */}
                    <div style={{ position: 'absolute', top: '50%', left: '-1rem', width: '1.5rem', height: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', filter: 'blur(1px)', animation: 'wing 0.2s infinite' }} />
                    <div style={{ position: 'absolute', top: '50%', right: '-1rem', width: '1.5rem', height: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', filter: 'blur(1px)', animation: 'wing 0.2s infinite' }} />
                </div>
            </motion.div>

            {/* Inline Styles for wing animation since it's very specific */}
            <style>{`
        @keyframes wing {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.2); }
        }
      `}</style>
        </div>
    );
};

export default Mascot;
