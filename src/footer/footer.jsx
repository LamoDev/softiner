import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip  } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <footer className="footer flex">
      <div className="footer-content">
      <p>© 2025 spark ✨ جميع الحقوق محفوظة.</p>
        <ul className="footer-links flex">
          <li><a href="privacy">سياسة الخصوصية</a></li>
          <li><a href="terms">شروط الاستخدام</a></li>
          <li><a href="contact">اتصل بنا</a></li>
        </ul>
        <div className="social-media">
          <a href="https://www.phone.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhoneFlip} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
  
        </div>
      </div>
    </footer>
  );
}