import React from 'react';
import { FaMosque, FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header role="banner">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="logo">
          <i><FaMosque /></i>
          <h1>الرشيدية</h1>
        </div>
        <ul className="nav-links" role="menubar">
          <li role="none"><a href="#home" role="menuitem">الرئيسية</a></li>
          <li role="none"><a href="#about" role="menuitem">عن المدينة</a></li>
          <li role="none"><a href="#services" role="menuitem">خدماتنا</a></li>
          <li role="none"><a href="#promotion" role="menuitem">التسويق</a></li>
          <li role="none"><a href="#categories" role="menuitem">التصنيفات</a></li>
          <li role="none"><a href="#contact" role="menuitem">اتصل بنا</a></li>
        </ul>
        <div className="menu-toggle">
         <i> <FaBars /></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
