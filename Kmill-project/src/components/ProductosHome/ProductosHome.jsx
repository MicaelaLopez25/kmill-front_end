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
      <h2 className="tituloprod">Nuestros Productos</h2>
      <div className="productos-container">
        {arr.map((element, index) => (
          <div className="producto">
            <Link to={element.link}>
              <a
                href="#seccionCookies"
                onClick={() => scrollIntoView("seccionCookies")}
              >
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
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosHome;
