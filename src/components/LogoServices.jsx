import React from 'react';
import { FaCheck } from 'react-icons/fa';

const LogoServices = () => {
  return (
    <section id="logo-services" className="logo-services-section">
      <div className="container">
        <h2 className="section-title">تصميم الشعارات</h2>
        <div className="logo-grid">
          <div className="logo-card">
            <img src="https://arabnas.com/wp-content/uploads/2022/12/logo-biz-2.png" alt="تصميم شعار بسيط" loading="lazy" />
            <div className="logo-content">
              <h3>شعار بسيط</h3>
              <p>تصميم شعار أنيق وبسيط لمشروعك الناشئ</p>
              <ul className="logo-features">
                <li><i><FaCheck /></i> تصميم عصري</li>
                <li><i><FaCheck /></i> سرعة في التنفيذ</li>
                <li><i><FaCheck /></i> سعر تنافسي</li>
              </ul>
              <span className="logo-price">ابتداء من 100 درهم</span>
            </div>
          </div>
          
          <div className="logo-card">
            <img src="https://i.pinimg.com/736x/9f/b1/0f/9fb10fd5353cea77a016c3e94f0c31b3.jpg" alt="تصميم شعار مع هوية بصرية" loading="lazy" />
            <div className="logo-content">
              <h3>شعار مع هوية بصرية</h3>
              <p>تصميم شعار متكامل مع دليل الهوية البصرية</p>
              <ul className="logo-features">
                <li><i><FaCheck /></i> شعار بتصاميم متنوعة</li>
                <li><i><FaCheck /></i> ألوان وخطوط متناسقة</li>
                <li><i><FaCheck /></i> تطبيقات الهوية البصرية</li>
              </ul>
              <span className="logo-price">ابتداء من 200 درهم</span>
            </div>
          </div>
          
          <div className="logo-card">
            <img src="https://kafiil.s3.eu-central-1.amazonaws.com/media/gig_main/b3e36605a1312d73e71a729b8381971c/c/5c4f3358b6df6fcd47a76cee0fe68191-large.jpg" alt="تصميم شعار احترافي" loading="lazy" />
            <div className="logo-content">
              <h3>شعار احترافي</h3>
              <p>تصميم شعار فريد يعكس هوية مشروعك</p>
              <ul className="logo-features">
                <li><i><FaCheck /></i> ملفات بصيغ متعددة</li>
                <li><i><FaCheck /></i> تعديلات غير محدودة</li>
                <li><i><FaCheck /></i> حقوق ملكية كاملة</li>
              </ul>
              <span className="logo-price">ابتداء من 300 درهم مع الاعلان</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoServices;
