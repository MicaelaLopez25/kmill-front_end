import "../components/cssMainComp/mainComp.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

AOS.init({
  // Opcional: configuración de AOS
  duration: 3000, // Duración de las animaciones en milisegundos
  delay: 300,
});

export function MainComponets() {
  const parrafo =
    "Galletas y alfajores, la esencia del trabajo artesanal con la misma pasión que nuestros antepasados, pero a gran escala. Además de la correcta manipulación acorde a estrictas normas de higiene y comprometidos con las buenas prácticas de manufactura.";

  return (
    <div className="contenido">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img className="imagenM" src="/galletas.jpg" alt="Galletas" />
      </div>
      <div className="texto">
        <h1 className="centrar letN">Desde 2024</h1>
        <h1 className="centrar titulo">Tienda Kmill</h1>
        <p className="parrafo">{parrafo}</p>
        <div data-aos="fade-up" className="sepaB">
          <Link to="/nosotros" className="boton outline separador">
            Conocer más
          </Link>
          <a href="/productos" className="boton">
            Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
