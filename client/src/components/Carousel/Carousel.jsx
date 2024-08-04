import React, { useState, useEffect } from 'react';
import './Carousel.css';
import stornger_together from '../../images/stornger_together.png'
import all_five from '../../images/all_5_posts.jpeg'

const images = [
  stornger_together,
  // 'https://wallpapers.com/images/hd/random-shanghai-city-skyline-sunset-razywjghzt72bz8i.jpg',
  // 'https://www.highreshdwallpapers.com/wp-content/uploads/2012/09/Random-Coloured-Shapes.jpg',
  all_five,
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
