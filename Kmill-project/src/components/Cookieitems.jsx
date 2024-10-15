import { Post } from "./grilla";

const posts = [
  {
    titulo: "Cookie Oreo ",
    description: "Joylne Cuyoj",
    link: "/oreocookie.jpg",
    subtitulo: "Variedades",
    parrafo: "Gato coca",
  },
  {
    titulo: "Cookie Rocklets",
    description: "Joylne Cuyoj",
    link: "/cookie1.jpg",
    subtitulo: "Variedades",
    parrafo: "Cookie Rocklets",
  },
  {
    titulo: "Cookie con mani",
    description: "Joylne Cuyoj",
    link: "/cokie2.jpg",
    parrafo: "Gato coca",
  },
  {
    titulo: "Cookie normal",
    description: "Joylne Cuyoj",
    link: "/cookienormal.jpg",
    parrafo: "Gato coca",
  },
  {
    titulo: "publicidad en contra de pepsi",
    description: "Joylne Cuyoj",
    link: "https://media.istockphoto.com/id/157511634/es/foto/caseras-con-pedacitos-de-chocolate-sobre-blanco-a%C3%A9reos-xxxl.jpg?s=612x612&w=0&k=20&c=er2YzMqo_KX15V7w37_E383WMPOqFbfxzCYtbx8Tubg=",
    parrafo: "Gato coca",
  },
  {
    titulo: "publicidad en contra de pepsi",
    description: "Joylne Cuyoj",
    link: "https://media.istockphoto.com/id/157511634/es/foto/caseras-con-pedacitos-de-chocolate-sobre-blanco-a%C3%A9reos-xxxl.jpg?s=612x612&w=0&k=20&c=er2YzMqo_KX15V7w37_E383WMPOqFbfxzCYtbx8Tubg=",
    parrafo: "Gato coca",
  },
];

const Cookieitems = () => {
  return (
    <>
      <h1 className="fuente-titulo"> Cookie </h1>
      <ul className="container">
        {posts.map((elemento, index) => (
          <Post
            description={elemento.description}
            link={elemento.link}
            parrafo={elemento.parrafo}
            titulo={elemento.titulo}
            subtitulo={elemento.subtitulo}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};

export default Cookieitems;
