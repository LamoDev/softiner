import React from 'react';
import Slider from 'react-slick';
import './LostItems.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const lostItems = [
  {
    name: 'منار القرشي',
    time: 'منذ أسبوع',
    item: 'سماعات',
    location: 'الليث',
    image: '/assets/images/airpods.jpeg',
  },
  {
    name: 'عذاري العتيبي',
    time: 'منذ يومان',
    item: 'ساعة أبل',
    location: 'مكة المكرمة',
    image: '/assets/images/watch.jpeg',
  },
  {
    name: 'لمياء المطيري',
    time: 'منذ يوم',
    item: 'نظارات',
    location: 'مكة المكرمة',
    image: '/assets/images/glasses.jpeg',
  },
];

const LostItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      <h1 className='losts-title'>أحدث البلاغات</h1>
      <Slider {...settings}>
        {lostItems.map((item, index) => (
          <div key={index} style={{ padding: '0 15px' }}>
            {/* ← هذا هو العنصر الذي أضفنا له padding لزيادة الفراغ بين الكروت */}
            <div className="card">
              <div className="card-header">
                <h3>{item.name}</h3>
                <p>{item.time}</p>
              </div>
              <img src={item.image} alt={item.item} />
              <div className="card-body">
                <h4>{item.item}</h4>
                <p>{item.location}</p>
                <button className="contact-button">تواصل</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LostItems;




