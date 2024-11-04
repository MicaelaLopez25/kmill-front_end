import "./ProductosHome.css";
import { Link, Route, Routes } from "react-router-dom";

const arr = [
  {
    fotoUrl: "./galletas.jpeg",
    coverFotoUrl: "./galletaline.png",
    link: "/productos",
    title: "Cookies",
  },
  {
    fotoUrl: "./alfajor.jpg",
    coverFotoUrl: "./alfajorline.png",
    link: "/productos",
    title: "Alfajores",
  },
  {
    fotoUrl: "./galletas.jpg",
    coverFotoUrl: "./linemuffin2.png",
    link: "/productos",
    title: "Cupcakes",
  },
];

function ProductosHome() {
  return (
    <section className="productos-home">
      <div className="tituloprod">
        <h2>Nuestros Productos</h2>
      </div>
      <div className="productos-container">
        {arr.map((element, index) => (
          <div className="producto">
            <Link to={element.link}>
              <img
                src={element.fotoUrl}
                alt="cookies"
                className="producto-imagen"
              />
              <img
                src={element.coverFotoUrl}
                alt="alfajores"
                className="producto-cover-imagen"
              />
              <h3 color="black" className="producto-title">
                {element.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosHome;
