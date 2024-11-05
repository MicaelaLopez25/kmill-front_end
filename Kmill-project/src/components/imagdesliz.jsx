import React, { useState, useEffect } from "react";
import "../components/cssMainComp/cssimagdesliz.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header"; // Importar como default

const ImageCarousel = () => {
  const images = [
    {
      url: "/gaaa.jpg",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
    {
      url: "/cookie22.JPG",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
    {
      url: "/cookie33.JPG",
      title: "Galletas deliciosas Alfajores y Cookies artesanales",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init();

    /*const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);*/
  }, [images.length]);

  const ImageWithTitle = ({ title, imageUrl }) => {
    return (
      <div className="titulofoto">
        <img src={imageUrl} alt={title} className="imagen" />
        <div style={{ position: "absolute", bottom: "200px", left: "100px" }}>
          <h2 style={{ color: "#fff" }}>{title}</h2>
        </div>
      </div>
    );
  };

  useEffect(() => {
    AOS.refresh();
  }, [currentImage]);

  return (
    <div className="imagendes">
      <ImageWithTitle
        title={images[currentImage].title}
        imageUrl={images[currentImage].url}
      />
      <div className="upo"></div>
    </div>
  );
};

export default ImageCarousel;
