import React from 'react';

const DesignServices = () => {
  return (
    <section id="design-services" className="design-services-section">
      <div className="container">
        <h2 className="section-title">تصاميم الإعلانات والملصقات</h2>
        <div className="design-grid">
          <div className="design-card">
            <img src="./images/aabb.jpg" alt="تصميم ملصق إعلاني" loading="lazy" />
            <div className="design-content">
              <h3>ملصقات تجارية</h3>
              <p>تصاميم عصرية تجذب العملاء وتعزز هوية علامتك التجارية</p>
              <span className="design-price">ابتداء من 150 درهم مع حملة اعلانية</span>
            </div>
          </div>
          <div className="design-card">
            <img src="./images/sdf.jpg" alt="تصميم ملصق للمناسبات" loading="lazy" />
            <div className="design-content">
              <h3>ملصقات المناسبات</h3>
              <p>تصاميم مميزة للمعارض والفعاليات الخاصة</p>
              <span className="design-price">ابتداء من 150 درهم مع حملة اعلانية</span>
            </div>
          </div>
          <div className="design-card">
            <img 
              src="./images/Red and White Geometric Creative Business Facebook Cover.png" 
              alt="تصميم ملصق للمطاعم" 
              loading="lazy" 
            />
            <div className="design-content">
              <h3>ملصقات المطاعم</h3>
              <p>تصاميم جذابة لقوائم الطعام والعروض الخاصة</p>
              <span className="design-price">ابتداء من 150 درهم مع حملة اعلانية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
