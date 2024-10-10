import React, { useState } from 'react';
/* eslint-disable */

const TopBar = ({ language }) => {
  return (
    <div className="top-bar">
      {language === 'en' ? 'Free shipping for purchases over 999 EGP' : 'شحن مجاني بقيمة مشتريات اعلى من 999 جنيه'}
    </div>
  );
};

const Navbar = ({ language, changeLanguage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./Logo.webp" alt="Logo" height="40" />
        </a>

        <div className="d-flex align-items-center">
          <a href="#" className="cart position-relative">
            <span className="icon-cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </a>

          <a href="#" className="user-icon">
            <span className="icon-user"></span>
          </a>

          <a href="#" className="btn btn-link" onClick={changeLanguage}>
            {language === 'en' ? 'عربي' : 'English'}
          </a>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const [language, setLanguage] = useState('ar'); // اللغة الافتراضية

  const changeLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div>
      <TopBar language={language} />
      <Navbar language={language} changeLanguage={changeLanguage} />
    </div>
  );
};

export default App;
