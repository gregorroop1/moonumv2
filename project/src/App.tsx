import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogSection from './components/CatalogSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans bg-white dark:bg-zinc-950 flex flex-col">
      <Navbar />
      <Hero />
      <CatalogSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
