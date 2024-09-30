import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    '/fotos/cookie1.JPG',
    '/fotos/cookie2.JPG',
    '/fotos/cookie3.JPG'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImageCarousel;
