import React, { useEffect, useState } from "react";
import { Post } from "./grilla";

// Vamos a guadar las imagenes en la base de datos,los links,
const posts = [
  {
    id: 1,
    titulo: 1,
    Descripcion: "Joylne Cuyoj",
    link: "/oreocookie.jpg",
  },
  {
    id: 2,
    titulo: 1,
    Descripcion: "Joylne Cuyoj",
    link: "/cookie1.jpg",
  },
  {
    id: 3,
    titulo: 1,
    Descripcion: "Joylne Cuyoj",
    link: "/cokie2.jpg",
  },
  {
    id: 4,
    titulo: "Cookie con chocolina",
    Descripcion: "Joylne Cuyoj",
    link: "/cookienormal.jpg",
  },
  {
    id: 5,
    titulo: 2,
    Descripcion: "f",
    link: "cookiechocolina.jpg",
  },
];

const Cookieitems = () => {
  const [products, setProducts, setIngredientes] = useState([]);

  useEffect(() => {
    console.log("products", products);
    products.map((item, index) => {
      console.log(item.Nombre, item.id, item.Descripcion, item.imagen);
    });
  }, [products]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/jsonproducto")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/ingrediente_producto/")
      .then((data) => data.json())
      .then((data) => setIngredientes(data));

    fetchData();
  }, []);

  return (
    <>
      <h1 className="fuente-titulo">Productos</h1>
      <ul className="container">
        {products.map((elemento, index) => (
          <Post
            key={elemento.id || index} // Si id no está definido, usa el índice
            titulo={elemento.Nombre || "Producto sin título"}
            Descripcion={elemento.Descripcion}
            link={elemento.imagen || "Sin imagen "}
            ingredientes={ingredientes[elemento.id] || []}
          />
        ))}
      </ul>
    </>
  );
};

export default Cookieitems;
