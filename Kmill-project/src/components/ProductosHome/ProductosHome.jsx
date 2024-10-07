import "./ProductosHome.css";
import { Link, Route, Routes } from "react-router-dom";

function ProductosHome() {
  return (
    <section className="productos-home">
      <h2 className="tituloprod">Nuestros Productos</h2>
      <div className="productos-container">
        <div className="producto">
          <Link to={"/productos"}>
            <a
              href="#seccionCookies"
              onClick={() => scrollIntoView("seccionCookies")}
            >
              <img
                src="./cookieline.png"
                alt="cookies"
                className="producto-imagen"
              />
              <h3 color="black">Cookies</h3>
            </a>
          </Link>
        </div>

        <div className="producto">
          <Link to={"/productos"}>
            <a
              href="#seccionAlfajores"
              onClick={() => scrollIntoView("seccionAlfajores")}
            >
              <img
                src="./alfajorline.png"
                alt="alfajores"
                className="producto-imagen"
              />
              <h3>Alfajores</h3>
            </a>
          </Link>
        </div>

        <div className="producto">
          <Link to={"/productos"}>
            <a
              href="#seccionCupcake"
              onClick={() => scrollIntoView("seccionCupcake")}
            >
              <img
                src="./cupcakeline.png"
                alt="cupcakes"
                className="producto-imagen"
              />
              <h3>Cupcakes</h3>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductosHome;
