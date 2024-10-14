import React, { useState, useEffect } from "react";
import "../components/cssMainComp/cssimagdesliz.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header"; // Importar como default

const ImageCarousel = () => {
  const images = [
    {
      url: "/cookie11.jpg",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
    // Puedes agregar más imágenes aquí
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
      <div className="titulofoto">
        <img src={imageUrl} alt={title} className="imagen" />
        <div>
          <h2 className="hola">{title}</h2>
        </div>
      </div>
    );
  };

  useEffect(() => {
    AOS.refresh();
  }, [currentImage]);

  return (
    <div className="imagendes">
      <Header /> {/* Header fuera de ImageWithTitle */}
      <ImageWithTitle
        title={images[currentImage].title}
        imageUrl={images[currentImage].url}
      />
      <div className="upo"></div>
    </div>
  );
};

export default ImageCarousel;
