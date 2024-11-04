// Nosotros.jsx
import React from "react";
import "./cssMainComp/nosotros.css"; // Asegúrate de que esta ruta sea correcta
import Header from "./Header.jsx";
import Footer from "./FooterYCss/Footer";
function Nosotros() {
  return (
    <div>
      <Header />
      <section className="nosotros-section">
        <h2>Acerca de Nosotros</h2>
        <div className="nosotros-content">
          <div className="nosotros-image-container">
            <img
              src="./cookies2.jpg"
              alt="Cookies variadas"
              className="nosotros-image"
            />
          </div>
          <div className="mover">
            <div className="nosotros-text-container">
              <p>
                En <strong>Kmill</strong>, nos apasiona llevar sonrisas a través
                de nuestras galletas. Lo que comenzó como un pequeño proyecto en
                la escuela, vendiendo cookies caseras, se ha convertido en una
                aventura llena de sabor y calidad. Desde el primer día, nuestra
                misión ha sido clara: ofrecer galletas frescas, deliciosas y
                hechas con los mejores ingredientes, ideales para cualquier
                momento.
              </p>
              <p>
                Nuestra visión es convertirnos en la opción preferida de quienes
                buscan algo dulce y auténtico. Creemos en la importancia de cada
                detalle y en la dedicación que ponemos en cada receta. Por eso,
                cuidamos cada proceso, desde la selección de los ingredientes
                hasta el empaquetado, asegurándonos de que cada cookie sea un
                reflejo de nuestro compromiso.
              </p>
              <p>
                Nos motiva la honestidad, la calidad y, sobre todo, la
                satisfacción de nuestros clientes. Porque para nosotros, cada
                bocado cuenta. Gracias por ser parte de esta dulce historia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Nosotros;
