import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <a href="https://activ.eg/">
        <img src="./Logo.webp" alt="Logo" className="Logo" />
      </a>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>عنا</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-dark">عن الشركة</Link></li>
              <li><Link to="/contact" className="text-dark">تواصل معنا</Link></li>
              <li><Link to="/branches" className="text-dark">فروعنا</Link></li> {/* Updated to use Link */}
              <li><Link to="/faq" className="text-dark">الأسئلة الشائعة</Link></li>
              <li><Link to="/terms" className="text-dark">سياسة الاستخدام</Link></li>
            </ul>
          </div>
          {/* ... other columns remain unchanged ... */}
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-md-end">
            <p className="mb-0">&copy; 2024. Activ All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;