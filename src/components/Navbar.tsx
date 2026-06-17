
import React, { useState, useEffect } from 'react';

interface NavbarProps {
    onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-0 z-50 transition-all ${scrolled ? 'nav-scrolled py-4' : 'py-6'}`}
            style={{ bottom: 'auto', transition: 'all 0.3s ease' }}
        >
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <div className="flex items-center justify-center font-bold text-white" style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', background: 'linear-gradient(to top right, #3B82F6, #8B5CF6)' }}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem' }}>
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="font-bold text-xl" style={{ letterSpacing: '-0.025em' }}>AutoHive</span>
                </div>

                <div className="flex items-center gap-8 hidden-mobile">
                    <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
                    <a href="#process" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Process</a>
                    <a href="#roi" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">ROI</a>
                    <a href="#testimonials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Testimonials</a>
                </div>

                <button
                    onClick={onOpenModal}
                    className="btn btn-primary text-sm hidden-mobile"
                >
                    Book Free Audit
                </button>

                {/* Mobile Menu Button */}
                <button className="text-white hidden-desktop">
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
