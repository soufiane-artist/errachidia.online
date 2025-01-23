import React from 'react';

const Tourism = () => {
  const tourismPlaces = [
    {
      image: "https://www.marocvoyages.com/wp-content/uploads/2016/02/Ville-Errachidia-Maroc.jpg",
      alt: "صورة لواحة خضراء في الرشيدية",
      title: "الواحات",
      description: "استكشف الواحات الخلابة المحيطة بالمدينة"
    },
    {
      image: "https://moroccotravelexplorer.com/wp-content/xswpwc/webp-images/uploads/2022/09/Tour-From-Errachidia-To-Merzouga-4.jpg.webp",
      alt: "صورة لقصر تاريخي في الرشيدية",
      title: "القصور التاريخية",
      description: "زيارة القصور التاريخية والمعالم الأثرية"
    },
    {
      image: "https://morocco-sahara-trips.com/wp-content/uploads/2024/04/2-days-errachidia-desert-tour-scaled.jpg",
      alt: "صورة لسوق تقليدي في الرشيدية",
      title: "الأسواق التقليدية",
      description: "تسوق في الأسواق التقليدية الشعبية"
    }
  ];

  return (
    <section id="tourism" className="tourism-section">
      <div className="container">
        <h2>معالم سياحية</h2>
        <div className="tourism-grid">
          {tourismPlaces.map((place, index) => (
            <div key={index} className="tourism-card">
              <img src={place.image} alt={place.alt} loading="lazy" />
              <div className="tourism-content">
                <h3>{place.title}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tourism;
