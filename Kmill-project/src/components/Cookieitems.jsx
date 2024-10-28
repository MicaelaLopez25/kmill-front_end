import React, { useEffect, useState } from "react";
import { Post } from "./grilla";

const posts = [
  {
    id: 1,
    titulo: "Cookie Oreo",
    description: "Joylne Cuyoj",
    link: "/oreocookie.jpg",
    subtitulo: "",
    parrafo: "",
  },
  {
    id: 2,
    titulo: "Cookie Rocklets",
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
    parrafo: "",
  },
  {
    id: 4,
    titulo: "Cookie con chocolina",
    description: "Joylne Cuyoj",
    link: "/cookienormal.jpg",
    parrafo: "",
  },
  {
    id: 9,
    titulo: "Publicidad en contra de Pepsi",
    description: "Joylne Cuyoj",
    link: "https://media.istockphoto.com/id/157511634/es/foto/caseras-con-pedacitos-de-chocolate-sobre-blanco-a%C3%A9reos-xxxl.jpg?s=612x612&w=0&k=20&c=er2YzMqo_KX15V7w37_E383WMPOqFbfxzCYtbx8Tubg=",
    parrafo: "",
  },
];

const Cookieitems = () => {
  const [ingredientes, setIngredientes] = useState({});

  useEffect(() => {
    const fetchIngredientes = async () => {
      const nuevosIngredientes = {};

      for (const post of posts) {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/ingrediente_producto/${post.id}`
          );
          if (response.ok) {
            const data = await response.json();
            nuevosIngredientes[post.id] = data; // Almacena los ingredientes
          } else {
            console.error("Error en la respuesta de la API");
          }
        } catch (error) {
          console.error("Error al obtener ingredientes:", error);
        }
      }

      setIngredientes(nuevosIngredientes); // Almacena todos los ingredientes
    };

    fetchIngredientes();
  }, []);

  return (
    <>
      <h1 className="fuente-titulo"> Cookies </h1>
      <ul className="container">
        {posts.map((elemento) => (
          <Post
            key={elemento.id}
            titulo={elemento.titulo}
            description={elemento.description}
            link={elemento.link}
            parrafo={elemento.parrafo}
            subtitulo={elemento.subtitulo}
            ingredientes={ingredientes[elemento.id] || []} // Pasa los ingredientes al componente Post
          />
        ))}
      </ul>
    </>
  );
};

export default Cookieitems;
