import React, { useEffect, useState } from "react";
import { Post } from "./grilla";

// Simulando los productos
const posts = [
  { id: 1, titulo: 1 },
  { id: 2, titulo: 2, link: 2 },
  { id: 3, titulo: 1, link: "/cokie2.jpg" },
];

const Cookieitems = () => {
  const [products, setProducts] = useState([]);
  const [ingredientes, setIngredientes] = useState({});
  const [productosCargados, setProductosCargados] = useState(new Set()); // Estado para controlar productos ya cargados

  // Función para eliminar duplicados de un array
  const eliminarDuplicados = (array) => {
    return [...new Set(array)];
  };

  // Obtener productos
  useEffect(() => {
    fetch("http://127.0.0.1:5000/jsonproducto")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  // Obtener ingredientes para cada producto
  useEffect(() => {
    if (products.length > 0) {
      products.forEach((producto) => {
        // Verificar si ya se cargaron los ingredientes para este producto
        if (!productosCargados.has(producto.id)) {
          fetch(`http://127.0.0.1:5000/ingrediente_producto/${producto.id}`)
            .then((data) => data.json())
            .then((data) => {
              const ingredientesUnicos = eliminarDuplicados(data); // Eliminar duplicados antes de actualizar
              setIngredientes((prev) => ({
                ...prev,
                [producto.id]: ingredientesUnicos, // Guardamos los ingredientes sin duplicados
              }));

              // Marcar este producto como cargado
              setProductosCargados((prev) => new Set(prev.add(producto.id)));
            });
        }
      });
    }
  }, [products, productosCargados]); // Solo se ejecuta cuando `products` cambia

  // Ver ingredientes en consola
  useEffect(() => {
    console.log("Ingredientes cargados:", ingredientes);
  }, [ingredientes]);

  return (
    <>
      <h1 className="fuente-titulo">Productos</h1>
      <ul className="container">
        {products.map((producto) => (
          <Post
            key={producto.id}
            titulo={producto.Nombre || "Producto sin título"}
            Descripcion={producto.Descripcion}
            link={producto.imagen || "Sin imagen "}
            ingredientes={ingredientes[producto.id] || []} // Mostrar ingredientes sin duplicados
          />
        ))}
      </ul>
    </>
  );
};

export default Cookieitems;
