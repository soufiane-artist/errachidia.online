import React from 'react';

const PromoVideos = () => {
  return (
    <section id="promo-videos" className="promo-videos-section">
      <div className="container">
        <h2 className="section-title">فيديوهات تسويقية</h2>
        <div className="video-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://linksshortcut.com/toraH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>التسويق الرقمي</h3>
              <p>كيف نساعدك في الوصول إلى عملائك المستهدفين</p>
            </div>
          </div>
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://linksshortcut.com/OfXWn"
                title="خدمات التصوير"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="video-info">
              <h3>خدمات التصوير الاحترافي</h3>
              <p>جودة عالية لمحتواك البصري</p>
            </div>
          </div>
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://media-hosting.imagekit.io//78793566de79459f/0121(5).mp4?Expires=1832259508&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gAjPPtOYUrXXP1KtuoTREzhpq6JLenS0JMJ0ELIfg5CFUDnsMQYRzpDOajqbnVrEHE3XrettZ9dZmK7Y-DsKkWLju5Q6ZtjOApV6oMYF8W-GKKDVvSycWAP-ptkVQAlYSzMO4iz7tBYGllwDugNF-A-0-oO~ZJ-ZPVc9KIsRiRw0cLo3U857NMMEYvmSik5jkyBn13aCsmFDIzdI8fgQKCY2gE20NbJ4zprqhJy36VsUm7-RWxsGbUI5bn8uB71hlWboc6xr8vNIoBPf7QwqOz84bY3LDmC3IgN11gZHJsPMKe9wGplMgsMCCxdPlYzBCM8w7zj5mMWdLPSH9nM8sQ__"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>الترويج للمحلات التجارية</h3>
              <p>جودة عالية لفيديوهات المحلات التجارية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideos;
