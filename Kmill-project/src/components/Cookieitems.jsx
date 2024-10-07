import { Post } from "./grilla";

const posts = [
  {
    titulo: "Cookie Oreo ",
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
  {
    titulo: "publicidad en contra de pepsi",
    description: "Joylne Cuyoj",
    link: "https://media.istockphoto.com/id/157511634/es/foto/caseras-con-pedacitos-de-chocolate-sobre-blanco-a%C3%A9reos-xxxl.jpg?s=612x612&w=0&k=20&c=er2YzMqo_KX15V7w37_E383WMPOqFbfxzCYtbx8Tubg=",
    parrafo: "Gato coca",
  },
];

const Cookieiteams = () => {
  return (
    <ul className="container">
      {posts.map((elemento, index) => (
        <Post
          description={elemento.description}
          link={elemento.link}
          parrafo={elemento.parrafo}
          titulo={elemento.titulo}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Cookieiteams;
