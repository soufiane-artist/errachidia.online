import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaTemperatureHigh, FaLandmark } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title">عن مدينة الرشيدية</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>الرشيدية هي مدينة مغربية تقع في الجنوب الشرقي للمملكة، وتعتبر بوابة الصحراء المغربية. تتميز بموقعها الاستراتيجي وتراثها الثقافي الغني.</p>
            <ul className="city-features">
              <li><i><FaMapMarkerAlt /></i> الموقع: جنوب شرق المغرب</li>
              <li><i><FaUsers /></i> عدد السكان: حوالي 90,000 نسمة</li>
              <li><i><FaTemperatureHigh /></i> المناخ: صحراوي</li>
              <li><i><FaLandmark /></i> معالم تاريخية متنوعة</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="https://static.menara.ma/content/uploads/2023/06/errachidia.jpg" alt="صورة بانورامية لمدينة الرشيدية" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
