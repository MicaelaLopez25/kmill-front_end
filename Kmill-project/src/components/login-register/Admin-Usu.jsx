import React from "react";
import "../cssMainComp/ad-usu.css";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css"; // Importar CSS de AOS


const UserRoles = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };
  return (
    <div className="fondo">
      <div className="user-roles texto" data-aos="zoom-in"   data-aos-duration="250">
        <button onClick={handleBackClick} className="back-button">
          Atrás
        </button>
        <div className="role">
          <a href="Login">
            <h3>Usuario</h3>
            <img src="public/usuario.png" alt="Usuario" />
          </a>
        </div>
        <div className="role">
          <a href="Login">
            <h3>Admin</h3>
            <img src="public/admin.png" alt="Admin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserRoles;
