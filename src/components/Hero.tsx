
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const frameCount = 191; // 0 to 191
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;

        // Preload images
        for (let i = 0; i <= frameCount; i++) {
            const img = new Image();
            // Pad index with zeros (e.g., 001, 010, 100)
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `/intro-sequence/frame_${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount + 1) {
                    setIsLoaded(true);
                }
            };
            images.push(img);
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Animation loop
        let animationFrameId: number;
        let currentFrame = 0;
        // Target 24fps
        const fps = 24;
        const interval = 1000 / fps;
        let lastTime = 0;

        const render = (time: number) => {
            if (time - lastTime > interval) {
                lastTime = time;
                if (images[currentFrame] && images[currentFrame].complete) {
                    // Clear and draw
                    // Maintain aspect ratio cover
                    const img = images[currentFrame];
                    const canvasAspect = canvas.width / canvas.height;
                    const imgAspect = img.width / img.height;

                    let drawWidth = canvas.width;
                    let drawHeight = canvas.height;
                    let offsetX = 0;
                    let offsetY = 0;

                    if (canvasAspect > imgAspect) {
                        drawHeight = canvas.width / imgAspect;
                        offsetY = (canvas.height - drawHeight) / 2;
                    } else {
                        drawWidth = canvas.height * imgAspect;
                        offsetX = (canvas.width - drawWidth) / 2;
                    }

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

                    currentFrame = (currentFrame + 1) % images.length;
                }
            }
            animationFrameId = requestAnimationFrame(render);
        };

        if (isLoaded) {
            requestAnimationFrame(render);
        }

        // Handle resize
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isLoaded]);

    return (
        <section className="relative bg-black pt-20" style={{ minHeight: '100vh' }}>
            {/* Banner Animation Section */}
            <div className="relative w-full overflow-hidden" style={{ height: '65vh' }}>
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(1.2)' }}
                />

                {/* Overlay Gradient at bottom to fade into content */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </div>

            {/* Content Section (Below Animation) */}
            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center" style={{ padding: '4rem 1rem' }}>
                {/* Left Content */}
                <div className="text-left" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                            AI Employees That <br />
                            <span className="spark-gradient-text">Work Like Magic.</span>
                        </h1>
                        <p className="text-xl text-gray-400" style={{ maxWidth: '32rem', lineHeight: 1.6 }}>
                            We engineer the techy side of your business so you can focus on growth. Replace manual grind with intelligent, 24/7 automation.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex gap-4"
                        style={{ flexWrap: 'wrap' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            onClick={onOpenModal}
                            className="btn btn-primary text-lg"
                        >
                            Book Free Audit
                        </button>
                        <a href="#roi" className="btn btn-secondary text-lg">
                            See the ROI
                        </a>
                    </motion.div>
                </div>

                {/* Right Content - Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    {/* Glass Card Dashboard */}
                    <div className="glass-panel relative" style={{ padding: '1.5rem', overflow: 'hidden' }}>
                        <div className="absolute top-0 left-0" style={{ width: '100%', height: '4px', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }} />

                        {/* Fake Dashboard UI */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="flex justify-between items-center mb-8">
                                <div style={{ height: '1rem', width: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.25rem' }} />
                                <div style={{ height: '2rem', width: '2rem', borderRadius: '9999px', background: 'rgba(59, 130, 246, 0.2)' }} />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ height: '0.75rem', width: '3rem', background: 'rgba(255,255,255,0.2)', borderRadius: '0.25rem', marginBottom: '0.5rem' }} />
                                        <div style={{ height: '1.5rem', width: '5rem', background: 'rgba(96, 165, 250, 0.8)', borderRadius: '0.25rem' }} />
                                    </div>
                                ))}
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '8rem', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                                {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                                    <div
                                        key={i}
                                        style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(to top, rgba(37, 99, 235, 0.5), rgba(139, 92, 246, 0.5))', borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem' }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Glowing Connection Lines */}
                        <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
                            <div className="absolute" style={{ top: '50%', left: '50%', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.2), transparent)', transform: 'rotate(-45deg)' }} />
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        className="absolute glass-panel animate-float flex items-center gap-3"
                        style={{ top: '-1.5rem', right: '-1.5rem', padding: '1rem' }}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex items-center justify-center font-medium" style={{ width: '2rem', height: '2rem', borderRadius: '9999px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>✓</div>
                        <div className="text-sm font-bold">Task Automated</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
