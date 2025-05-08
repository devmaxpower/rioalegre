import { useState, useEffect, useRef } from 'react'
import './assets/scss/index.scss';
import Header from './Components/Header'
import HomeSection from './Components/HomeSection';
import ProjectSection from './Components/ProjectSection';
import MasteplanSection from './Components/MasteplanSection';
import EntornoSection from './Components/EntornoSection';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import UbicacionSection from './Components/UbicacionSection';
import ContactoSection from './Components/ContactoSection';
import Footer from './Components/Footer';
import MenuMobile from './Components/MenuMobile';

function App() {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const rect = headerRef.current.getBoundingClientRect();

      if (rect.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <HomeSection />
      <main ref={headerRef}>
        <Header className={isSticky ? 'sticky' : ''} onMenuClick={() => setMenuOpen(!menuOpen)}  />
        <MenuMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <ProjectSection />
        <MasteplanSection />
        <EntornoSection />
        <UbicacionSection />
        <ContactoSection />
        <Footer />
      </main>
    </>
  )
}

export default App
