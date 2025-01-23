import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <p><i><FaEnvelope /></i> info@errachidia.ma</p>
          <p><i><FaPhone /></i> +212-535-572-000</p>
          <p><i><FaMapMarkerAlt /></i> الرشيدية، المغرب</p>
        </div>
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#about">عن المدينة</a></li>
            <li><a href="#ads">الإعلانات</a></li>
            <li><a href="#tourism">السياحة</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>تابعنا</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i><FaFacebook /></i></a>
            <a href="#" aria-label="Instagram"><i><FaInstagram /></i></a>
            <a href="#" aria-label="Twitter"><i><FaTwitter /></i></a>
            <a href="#" aria-label="YouTube"><i><FaYoutube /></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} مدينة الرشيدية - جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
