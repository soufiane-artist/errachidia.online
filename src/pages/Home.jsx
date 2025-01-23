import React, { useEffect } from 'react';
import './styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Promotion from '../components/Promotion';
import PromoVideos from '../components/PromoVideos';
import DesignServices from '../components/DesignServices';
import LogoServices from '../components/LogoServices';
import FeaturedAds from '../components/FeaturedAds';
import About from '../components/About';
import Categories from '../components/Categories';
import Tourism from '../components/Tourism';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    // Animation observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Counter animation
    const animateCounter = (element, target) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        }
      }, 20);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.getAttribute('data-target');
          animateCounter(entry.target, target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.counter').forEach(counter => {
      counterObserver.observe(counter);
    });

    // Cleanup
    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main role="main">
        <Hero />
        <Stats />
        <Services />
        <Promotion />
        <PromoVideos />
        <DesignServices />
        <LogoServices />
        <FeaturedAds />
        <About />
        <Categories />
        <Tourism />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Home;