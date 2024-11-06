import React, { useState, useEffect } from "react";
import "../components/cssMainComp/cssimagdesliz.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header"; // Importar como default

const ImageCarousel = () => {
  const images = [
    {
      url: "/gpantalla1.jpg",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
    {
      url: "/gpantalla2.jpg",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
    {
      url: "/gpantalla3.jpg",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init();

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const ImageWithTitle = ({ title, imageUrl }) => {
    return (
      <div className="image-container">
        <div className="image-wrapper">
          <img src={imageUrl} alt={title} className="imagen" />
        </div>
        <div className="title-container">
          <h2>{title}</h2>
        </div>
      </div>
    );
  };

  useEffect(() => {
    AOS.refresh();
  }, [currentImage]);

  return (
    
    <div className="imagendes">
            <div className="shadow-overlay"></div> {/* Sombra */}

      <ImageWithTitle
        title={images[currentImage].title}
        imageUrl={images[currentImage].url}
      />
    </div>
  );
};

export default ImageCarousel;
