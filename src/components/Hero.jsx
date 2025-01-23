import React from 'react';
import { FaRocket } from 'react-icons/fa';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.querySelector('.promotion-section');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const formOffset = formSection.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: formOffset,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content hidden">
        <h1 id="hero-title" className="animate-title float-element">مرحباً بكم في الرشيدية</h1>
        <p className="animate-subtitle float-element">نساعدك في الوصول إلى عملائك المستهدفين</p>
        <button className="cta-button animate-button float-element" onClick={scrollToForm}>
          <i><FaRocket /></i> ابدأ الآن
        </button>
      </div>
    </section>
  );
};

export default Hero;
