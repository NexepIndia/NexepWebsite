import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoreValues from './components/CoreValues';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveSection(hash);

      // FIX: Agar Core Values nahi hai, to smooth scroll karo sahi section par
      if (hash !== 'core-values') {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
             // Agar element nahi mila (jaise #home), to top par jao
             window.scrollTo(0, 0);
          }
        }, 100); // Thoda delay taaki page load ho jaye
      } else {
        // Agar Core Values page hai, to seedha top par jao
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: string) => {
    window.location.hash = section;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="pt-16">
        {activeSection === 'core-values' ? (
          /* New Page Logic */
          <CoreValues />
        ) : (
          /* Home Page Logic */
          <>
            <div id="home">
              <Hero onNavigate={handleNavigate} />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="products">
              <Products />
            </div>
            <Partners />
            <div id="contact">
              <Contact />
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;