import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ProjectGallery from '../components/ProjectGallery';
import Process from '../components/Process';

const Home = () => {
  const { hash } = useLocation();

  // When navigating from another page (e.g. /projects → /#contact),
  // scroll to the target section once the page mounts.
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // Small delay so the DOM is fully painted before scrolling
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <div className="app-wrapper">
      <Hero />
      <AboutUs />
      <Services />
      <ProjectGallery />
      <Process />
    </div>
  );
};

export default Home;
