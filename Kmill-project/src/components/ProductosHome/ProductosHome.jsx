import "./ProductosHome.css";

function ProductosHome() {
  return (
    <section className="productos-home">
      <h2 className="titulo">Nuestros Productos</h2>
      <div className="productos-container">
        <div className="producto">
          <a
            href="#seccionCookies"
            onClick={() => scrollIntoView("seccionCookies")}
          >
            <img
              src="./cookieline.png"
              alt="cookies"
              className="producto-imagen"
            />
            <h3>Cookies</h3>
          </a>
        </div>

        <div className="producto">
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
        </div>

        <div className="producto">
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
        </div>
      </div>
    </section>
  );
}

export default ProductosHome;
