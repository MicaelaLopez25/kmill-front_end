import "../components/cssMainComp/mainComp.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS

AOS.init({
  // Opcional: configuración de AOS
  duration: 3000, // Duración de las animaciones en milisegundos
  delay: 300,
});

export function MainComponets() {
  const parrafo =
    "Casa Ramos, la esencia del trabajo artesanal con la misma pasión que nuestros antepasados, pero a gran escala. Además de la correcta manipulación acorde a estrictas normas de higiene y comprometidos con las buenas prácticas de manufactura (BPM)."; // Asegúrate de definir esto

  return (
    <div className="contenido">
      <div data-aos="fade-right">
        <img className="imagen" src="/galletas.jpg" alt="Galletas" />
      </div>
      <div className="texto">
        <h1 className="centrar letN">desde 2024</h1>
        <h1 className="centrar titulo">Tienda Kmill</h1>
        <p>{parrafo}</p>
        <div data-aos="fade-up">
          <a
            href="https://www.pastasramos.com.ar/nosotros"
            class="boton outline separador"
          >
            Conocer más
          </a>
          <a
            href="https://www.pastasramos.com.ar/nuestras-pastas"
            class="boton"
          >
            Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
