
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mascot from './components/Mascot';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ROISection from './components/ROISection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

// Placeholder components until we build them


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[var(--color-void-black)] text-white font-body selection:bg-purple-500/30">
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        <Hero onOpenModal={handleOpenModal} />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <TestimonialsSection />
        <ROISection />
        <ProcessSection />

        {/* Final CTA Section */}
        <section className="py-32 relative text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Stop doing the busy work.</h2>
            <p className="text-xl text-gray-400 mb-10">No commitment. Just a conversation.</p>
            <button
              onClick={handleOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              Book Your Free Audit
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <Mascot onClick={() => alert("Buzz! Want to build your first AI agent?")} />

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="absolute inset-0" onClick={handleCloseModal} />
          <div className="modal-content">
            {/* Modal Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="modal-title">Build Your Agent</h2>
              <p className="modal-desc">Tell us what you want to automate.</p>
              <button
                onClick={handleCloseModal}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                ✕
              </button>
              <form className="modal-form" onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! AutoHive will reach out within 24 hours.");
                handleCloseModal();
              }}>
                <input type="text" name="name" placeholder="Name" className="form-input" required />
                <input type="email" name="email" placeholder="Work Email" className="form-input" required />
                <input type="text" name="company" placeholder="Company Name" className="form-input" required />
                
                <textarea name="automation" placeholder="What tasks do you want to automate?" className="form-input form-textarea" required></textarea>
                <button type="submit" className="w-full btn btn-primary mt-2">Request My Audit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
