import React, { useState, useEffect } from 'react';
import "../components/cssMainComp/cssimagdesliz.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS

const ImageCarousel = () => {
  const images = [
    { url: '/cookie11.jpg', title: 'Galletas deliciosas Alfajores y cookies artesanales' },
    { url: '/cookie22.JPG', title: 'Galletas deliciosas Alfajores y cookies artesanales' },
    { url: '/cookie33.JPG', title: 'Galletas deliciosas Alfajores y cookies artesanales' }
  ];

  const animations = [
    'zoom-in',
    'fade-up',
    'slide-left'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init(); // Inicializa AOS

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    AOS.refresh(); // Actualiza AOS al cambiar la imagen
  }, [currentImage]);

  const ImageWithTitle = ({ title, imageUrl }) => {
    return (
      <div className="titulofoto">
        <img src={imageUrl} alt={title} className="imagen" />
        <h2 className="hola">{title}</h2>
      </div>
    );
  };

  return (
    <div className="imagendes">
      <ImageWithTitle 
        title={images[currentImage].title} 
        imageUrl={images[currentImage].url} 
      />
      <div className="upo"></div> {/* Este div aplica el fondo con opacidad */}
    </div>
  );
};

export default ImageCarousel;
