import React, { useEffect, useState } from "react";
import { Post } from "./Grilla"; // Asegúrate de importar el componente Post actualizado

function Cookieorder() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("products", products);
    products.map((item, index) => {
      console.log(item.Nombre, item.id, item.Descripcion, item.Precio);
    });
  }, [products]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/jsonproducto")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const nuevosProductos = [];

      for (const item of item.id) {
        try {
          // Obtener productos
          const productosResponse = await fetch(
            `http://127.0.0.1:5000/producto/${item.id}`
          );
          if (productosResponse.ok) {
            const data = await productosResponse.json();
            nuevosProductos.push(data); // Agrega el producto al array
          } else {
            console.error("Error en la respuesta de la API de productos");
          }
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      }

      setProductos(nuevosProductos); // Almacena todos los productos en un array
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="fuente-titulo">Productos</h1>
      <ul className="container">
        {products.map((product) => (
          <Post
            key={product.id}
            titulo={product.Nombre}
            description={product.Descripcion}
            precio={product.Precio}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cookieorder;
