import React, { useState } from 'react';
import { FaCheck, FaPaperPlane } from 'react-icons/fa';
import {toast, ToastContainer} from 'react-toastify'
import axios from 'axios'
const Promotion = () => {
  const [formData, setFormData] = useState({
    namProject: '',
    TypeProject: '',
    userName: '',
    userPhone: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitButton = event.target.querySelector('.submit-button');
    submitButton.classList.add('submitting');

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL, formData);
      console.log('data.message', response.data);
      toast.success(response.data.message);
      
      // Reset form after successful submission
      setFormData({
        namProject: '',
        TypeProject: '',
        userName: '',
        userPhone: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('حدث خطأ في إرسال البيانات');
    } finally {
      setTimeout(() => {
        submitButton.classList.remove('submitting');
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="promotion" className="promotion-section" aria-labelledby="promotion-title">
     <ToastContainer />
      <div className="container">
        <div className="promotion-content">
          <div className="promotion-text hidden">
            <h2 id="promotion-title">روّج لمشروعك معنا</h2>
            <p>نساعدك في الوصول إلى عملائك المستهدفين من خلال منصتنا المتكاملة</p>
            <ul className="benefits-list">
              <li><i><FaCheck /></i> وصول أوسع للعملاء</li>
              <li><i><FaCheck /></i> إدارة احترافية لحملتك الإعلانية</li>
              <li><i><FaCheck /></i> تقارير أداء مفصلة</li>
              <li><i><FaCheck /></i> دعم فني على مدار الساعة</li>
            </ul>
          </div>
          <div className="promotion-form hidden">
            <form id="promotionForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="namProject">اسم المشروع</label>
                <input
                  id="namProject"
                  type="text"
                  required
                  value={formData.namProject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="TypeProject">نوع النشاط</label>
                <select
                  id="TypeProject"
                  required
                  value={formData.TypeProject}
                  onChange={handleChange}
                >
                  <option value="">اختر نوع النشاط</option>
                  <option value="retail">متجر</option>
                  <option value="restaurant">مطعم</option>
                  <option value="service">خدمات</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="userName">الاسم الشخصي</label>
                <input
                  id="userName"
                  type="text"
                  required
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userPhone">رقم الهاتف</label>
                <input
                  id="userPhone"
                  type="tel"
                  required
                  value={formData.userPhone}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">
                <span className="button-text">إرسال الطلب</span>
                <i><FaPaperPlane /></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
