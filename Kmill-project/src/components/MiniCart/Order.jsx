import React, { useEffect, useState } from "react";
import { Post } from "./grilla";

const posts = [
  {
    id: 1,
    titulo: 1,
    description: "Joylne Cuyoj",
    link: "/oreocookie.jpg",
    subtitulo: "",
    parrafo: "",
  },
  {
    id: 2,
    titulo: "Cookie Clásica",
    description: "Joylne Cuyoj",
    link: "/cookie1.jpg",
    subtitulo: "",
    parrafo: "",
  },
  {
    id: 3,
    titulo: "Cookie con maní",
    description: "Joylne Cuyoj",
    link: "/cokie2.jpg",
    subtitulo: "",
    parrafo: "",
  },
  {
    id: 4,
    titulo: "Cookie con chocolina",
    description: "Joylne Cuyoj",
    link: "/cookienormal.jpg",
    subtitulo: "",
    parrafo: "",
  },
];

const Cookieitems = () => {
  const [precios, setPrecios] = useState({});
  const [productos, setProductos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const nuevosPrecios = {};
      const nuevosProductos = {};

      for (const post of posts) {
        try {
          // Obtener precios
          const preciosResponse = await fetch(
            `http://127.0.0.1:5000/precio_producto/${post.id}`
          );
          if (preciosResponse.ok) {
            const data = await preciosResponse.json();
            nuevosPrecios[post.id] = data; // Almacena los precios
          } else {
            console.error("Error en la respuesta de la API de precios");
          }

          // Obtener productos
          const productosResponse = await fetch(
            `http://127.0.0.1:5000/producto/${post.id}`
          );
          if (productosResponse.ok) {
            const data = await productosResponse.json();
            nuevosProductos[post.id] = data; // Almacena los productos
          } else {
            console.error("Error en la respuesta de la API de productos");
          }
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      }

      setIngredientes(nuevosPrecios); // Almacena todos los precios
      setProductos(nuevosProductos); // Almacena todos los productos
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="fuente-titulo">Productos</h1>
      <ul className="container">
        {posts.map((elemento) => (
          <Post
            key={elemento.id}
            titulo={elemento.titulo}
            description={elemento.description}
            link={elemento.link}
            parrafo={elemento.parrafo}
            subtitulo={elemento.subtitulo}
            precio={precios[elemento.id] || []} // Pasa los ingredientes al componente Post
          />
        ))}
      </ul>
    </>
  );
};

export default Cookieitems;
