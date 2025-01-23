import React from 'react';
import { FaBullhorn, FaCamera, FaChartLine } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title hidden">خدماتنا</h2>
        <div className="services-grid">
          <div className="service-card hidden">
            <div className="service-icon">
              <FaBullhorn />
            </div>
            <h3>التسويق الرقمي</h3>
            <p>نساعدك في الوصول إلى عملائك عبر منصات التواصل الاجتماعي</p>
          </div>
          <div className="service-card hidden">
            <div className="service-icon">
              <FaCamera />
            </div>
            <h3>التصوير الاحترافي</h3>
            <p>خدمات تصوير احترافية لمنتجاتك ومحلك التجاري</p>
          </div>
          <div className="service-card hidden">
            <div className="service-icon">
              <FaChartLine />
            </div>
            <h3>تحليل البيانات</h3>
            <p>تقارير تحليلية عن أداء إعلاناتك وتفاعل العملاء</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
