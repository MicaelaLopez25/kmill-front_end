import React, { useEffect, useState } from "react";
import { Post } from "./Grilla";

const Cookieitems = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/productos"); // Ajusta la URL a tu endpoint
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="fuente-titulo">Productos</h1>
      <ul className="container">
        {productos.map((producto) => (
          <Post
            key={producto.id}
            titulo={producto.titulo}
            description={producto.description}
            precio={producto.precio}
            imagen={producto.link}
          />
        ))}
      </ul>
    </>
  );
};

export default Cookieitems;
