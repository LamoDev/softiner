import React from 'react';
import './Home.css';
import '../header/Header.css';
import '../main/MainContent.css';
import '../about/About.css';
import '../location/Location.css';
import '../footer/footer.css';
import '../slider/LostItems.css';

import Header from '../header/Header'
import MainContent from '../main/MainContent';
import About from '../about/About';
import Location from '../location/Location';
import Footer from '../footer/footer';
import LostItems from '../slider/LostItems';

export default function Home() {
  return (
    <div className="home-container" dir='rtl'>
      <Header />
      <About />
      <MainContent />
      <Location />
      <LostItems />
      <Footer />
    </div>
  );
}
