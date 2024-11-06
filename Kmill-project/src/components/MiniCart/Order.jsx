import React, { useEffect, useState } from "react";
import { Post } from "./Grilla";
import Footer from "../FooterYCss/Footer";
import Header from "../Header";
import "./Order.css";

function Cookieorder() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/productopedido");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Aquí puedes manejar el error de forma más específica,
        // por ejemplo, mostrando un mensaje de error al usuario.
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="fuente-titulo">Alfajores</h1>
      <ul className="container">
        {products.map((product) => (
          <Post
            key={product.id}
            titulo={product.Nombre}
            rutaimg={product.imagen}
            description={product.Descripcion}
            precio={product.Precio}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cookieorder;
