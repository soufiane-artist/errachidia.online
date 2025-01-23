import React from 'react';

const FeaturedAds = () => {
  return (
    <section id="featured-ads" className="ads-section">
      <div className="container">
        <h2>أحدث الإعلانات</h2>
        <div className="ads-grid">
          <div className="ad-card">
            <div className="ad-image">
              <img src="https://www.riaddarsofian.com/uploads/1514472332-r6.JPG" alt="صورة إعلانية لمطعم" loading="lazy" />
            </div>
            <div className="ad-content">
              <span className="ad-category">مطعم</span>
              <h3>مطعم الواحة التقليدي</h3>
              <p>أشهى المأكولات المغربية التقليدية</p>
              <div className="ad-footer">
                <span className="ad-price">متوسط السعر: 100 درهم</span>
                <button className="details-button">التفاصيل</button>
              </div>
            </div>
          </div>
          <div className="ad-card">
            <div className="ad-image">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/343822131.jpg?k=3565d59eb4ea851a7e9e08935450cc9365476cc9e9148baec0ed6c25f29c2a9f&o=&hp=1" alt="صورة إعلانية لفندق" loading="lazy" />
            </div>
            <div className="ad-content">
              <span className="ad-category">فندق</span>
              <h3>فندق النخيل</h3>
              <p>إقامة فاخرة مع إطلالة على الواحة</p>
              <div className="ad-footer">
                <span className="ad-price">ابتداء من 500 درهم</span>
                <button className="details-button">التفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAds;
