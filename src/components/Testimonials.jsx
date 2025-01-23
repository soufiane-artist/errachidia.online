import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "خدمة ممتازة وفريق عمل محترف. ساعدوني في تطوير تواجدي الرقمي بشكل كبير.",
      author: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KeNy3hEuo5wSgrbvJWWJmv6-pNehnF6R1Q&s",
        name: "sawsane fakir",
        title: "صاحبة مطعم"
      }
    },
    {
      rating: 4.5,
      text: "نتائج مذهلة في وقت قصير. الخدمات التسويقية ساعدت في زيادة مبيعاتي بشكل ملحوظ.",
      author: {
        image: "https://i.pravatar.cc/150?img=2",
        name: "فاطمة العلوي",
        title: "صاحبة متجر أزياء"
      }
    },
    {
      rating: 5,
      text: "تجربة رائعة مع فريق محترف. التحليلات والتقارير ساعدتني في فهم سوقي بشكل أفضل.",
      author: {
        image: "https://i.pravatar.cc/150?img=3",
        name: "كريم الحسني",
        title: "مدير شركة عقارات"
      }
    },
    {
      rating: 5,
      text: "أفضل خدمة تسويقية جربتها. النتائج كانت أفضل من توقعاتي بكثير.",
      author: {
        image: "https://i.pravatar.cc/150?img=4",
        name: "سارة الناصري",
        title: "صاحبة صالون تجميل"
      }
    },
    {
      rating: 5,
      text: "خدمة استثنائية وفريق عمل متفاني. ساعدوني في تطوير استراتيجية تسويقية متكاملة لمطعمي.",
      author: {
        image: "https://i.pravatar.cc/150?img=8",
        name: "أحمد المغربي",
        title: "صاحب مطعم"
      }
    },
    {
      rating: 5,
      text: "منصة رائعة ساعدتني في الوصول لعملاء جدد. الدعم الفني والمتابعة المستمرة كانت ممتازة.",
      author: {
        image: "https://i.pravatar.cc/150?img=5",
        name: "ليلى العمراني",
        title: "صاحبة متجر إلكتروني"
      }
    }
  ];

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" />);
    }

    return <div className="rating">{stars}</div>;
  };

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title">آراء عملائنا</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                {renderRating(testimonial.rating)}
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.author.image} alt={`صورة العميل ${testimonial.author.name}`} loading="lazy" />
                  <div className="author-info">
                    <h4>{testimonial.author.name}</h4>
                    <span>{testimonial.author.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
