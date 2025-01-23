import React from 'react';
import { 
  FaStore, 
  FaUtensils, 
  FaHotel, 
  FaShoppingBag, 
  FaCar, 
  FaBriefcase, 
  FaGraduationCap 
} from 'react-icons/fa';

const Categories = () => {
  const categories = [
    {
      icon: <i><FaStore /></i>,
      title: 'محلات تجارية',
      description: 'اكتشف أفضل المحلات التجارية في المدينة'
    },
    {
      icon: <i><FaUtensils /></i>,
      title: 'مطاعم ومقاهي',
      description: 'أشهى المأكولات التقليدية والعصرية'
    },
    {
      icon: <i><FaHotel /></i>,
      title: 'فنادق وإقامة',
      description: 'أماكن إقامة مريحة لجميع الميزانيات'
    },
    {
      icon: <i><FaShoppingBag /></i>,
      title: 'تسوق',
      description: 'أفضل مراكز التسوق والأسواق التقليدية'
    },
    {
      icon: <i><FaCar /></i>,
      title: 'خدمات النقل',
      description: 'خدمات النقل والتأجير'
    },
    {
      icon: <i><FaBriefcase /></i>,
      title: 'خدمات مهنية',
      description: 'خدمات متنوعة للأفراد والشركات'
    },
    {
      icon: <i><FaGraduationCap /></i>,
      title: 'التعليم والتدريب',
      description: 'دورات تدريبية وخدمات تعليمية'
    },
    {
      icon: <i><FaUtensils /></i>,
      title: 'المطاعم والضيافة',
      description: 'خدمات الطعام والضيافة المتميزة'
    }
  ];

  return (
    <section id="categories" className="categories-section" aria-labelledby="categories-title">
      <div className="container">
        <h2 id="categories-title">تصفح حسب الفئة</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              {category.icon}
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
