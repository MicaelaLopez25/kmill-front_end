// src/components/Footer.jsx
import "../FooterYCss/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS

AOS.init({
  // Opcional: configuración de AOS
  duration: 3000, // Duración de las animaciones en milisegundos
  delay: 300,
});

const Footer = () => {
  return (
    <div className="site-footer  site-footer::before">
      <footer>
        <div className="footerContentStyle">
          <p>&copy; 2024 Galletas Deliciosas. Todos los derechos reservados.</p>

          <div className="socialLinksStyle">
            <h3 className="letra">Datos de contacto</h3>
            <div
              className="centrar"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="150"
              data-aos-duration="350"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="150"
              >
                <a
                  href="https://wa.link/60mj76"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="public/wasap2.png" className="iconoW" alt />
                </a>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="500"
              >
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="public/insta.png" className="iconoI" alt />
                </a>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="750"
              >
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="public/twt.png" className="iconoT" alt />
                </a>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="900"
              >
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="public/gmail2.png" className="iconoG" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
