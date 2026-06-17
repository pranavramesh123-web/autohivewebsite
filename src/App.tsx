
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
              <h2 className="modal-title">Book Free Audit</h2>
              <p className="modal-desc">Select a date and time for your free 15-minute AI strategy audit.</p>
              <button
                onClick={handleCloseModal}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                ✕
              </button>
              <form className="modal-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const date = formData.get('date');
                const time = formData.get('time');
                alert(`Thanks ${name}! We've scheduled your audit for ${date} at ${time}. A calendar invite has been sent to ${email}.`);
                handleCloseModal();
              }}>
                <input type="text" name="name" placeholder="Name" className="form-input" required />
                <input type="email" name="email" placeholder="Work Email" className="form-input" required />
                <input type="text" name="company" placeholder="Company Name" className="form-input" required />
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <select name="date" className="form-input" required>
                    <option value="" disabled selected hidden>Choose Date</option>
                    <option value="Thursday, June 18">Thu, June 18</option>
                    <option value="Friday, June 19">Fri, June 19</option>
                    <option value="Monday, June 22">Mon, June 22</option>
                    <option value="Tuesday, June 23">Tue, June 23</option>
                  </select>
                  <select name="time" className="form-input" required>
                    <option value="" disabled selected hidden>Choose Time (EST)</option>
                    <option value="10:00 AM">10:00 AM EST</option>
                    <option value="11:30 AM">11:30 AM EST</option>
                    <option value="1:00 PM">1:00 PM EST</option>
                    <option value="2:30 PM">2:30 PM EST</option>
                    <option value="4:00 PM">4:00 PM EST</option>
                  </select>
                </div>

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
