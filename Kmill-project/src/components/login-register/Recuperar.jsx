import React, { useState } from "react";
import "../cssMainComp/Recuperar.css";
import { useNavigate } from "react-router-dom";

const Recuperar = () => {  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el correo de recuperación
    console.log("Email enviado a:", email);
};
  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };


  return (
    <div className="centrar-container">
    <div className="recuperar-container">
    <button onClick={handleBackClick} className="back-button">Atras</button>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Enlace de Recuperación</button>
      </form>
    </div>
    </div>
  );
};

export default Recuperar;
