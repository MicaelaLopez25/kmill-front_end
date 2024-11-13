import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaUserShield } from "react-icons/fa"; // Íconos de Admin y Usuario
import "./cssMainComp/header.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // Obtener el rol desde localStorage
  
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
    obtenerIngredientes();  // Cargar los ingredientes disponibles
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const obtenerIngredientes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/ingredientes");
      const data = await response.json();
      console.log("Ingredientes obtenidos:", data);  // Verificar la respuesta
      setIngredientes(data.ingredientes);  // Asume que el backend devuelve { ingredientes: [...] }
    } catch (error) {
      console.error("Error al obtener ingredientes:", error);
    }
  };
  

  // Función para manejar el cambio en los ingredientes seleccionados
  const manejarIngredienteSeleccionado = (event) => {
    const ingredienteId = event.target.value;
    setIngredientesSeleccionados((prevSeleccionados) =>
      prevSeleccionados.includes(ingredienteId)
        ? prevSeleccionados.filter(id => id !== ingredienteId)  // Desmarcar
        : [...prevSeleccionados, ingredienteId]  // Marcar
    );
  };

  // Manejar el logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // También eliminar el rol al cerrar sesión
    navigate("/"); // Redirigir a la página de inicio de sesión
  };

  // Función para manejar el envío del formulario de agregar producto
  const handleAgregarProducto = async (event) => {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const descripcion = event.target.descripcion.value;
    const precio = event.target.precio.value;
    const id_categoria = event.target.id_categoria.value;
    const imagen = event.target.imagen.value;

    
    try {
      const response = await fetch("http://127.0.0.1:5000/producto/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          id_categoria,
          imagen,
          ingredientes: ingredientesSeleccionados,  // Enviar los ingredientes seleccionados
        }),
      });

      if (response.ok) {
        alert("Producto agregado exitosamente");
        closeModal(); // Cerrar el modal al agregar el producto
      } else {
        alert("Error al agregar el producto");
      }
    } catch (error) {
      console.error("Error al agregar producto:", error);
      alert("Hubo un error al agregar el producto");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="logoCOOKIE.png" alt="Cookie" className="cookie-image" />
        
        {/* Mostrar el botón "Agregar Producto" solo si es Admin */}
        {role === "Admin" && (
          <button onClick={openModal} className="btn-agregar">
            Agregar Producto
          </button>
        )}
      </div>

      <nav className="nav">
        <div className="nav-left">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/pedido">Pedido</Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() =>
                  document
                    .getElementById("footer")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="login">
        <ul>
          {!token ? (
            <li>
              <Link to="/UserRoles" className="blanco">
                Ingresar
              </Link>
            </li>
          ) : (
            <>
              {/* Muestra el rol y el ícono correspondiente */}
              <li className="role-display abajo">
                {role === "Admin" ? (
                  <>
                    <FaUserShield size={20} style={{ marginRight: "5px" }} />
                    Admin
                  </>
                ) : (
                  <>
                    <FaUserAlt size={20} style={{ marginRight: "5px" }} />
                    Usuario
                  </>
                )}
              </li>
             
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Salir
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Modal para agregar producto */}
      {isModalOpen && (
        <div className="modal" id="productoModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Producto</h5>
                <button
                  type="button"
                  className="close "
                  onClick={closeModal}
                  aria-label="Close"
                >
                  
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAgregarProducto}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre del Producto</label>
                    <input type="text" className="form-control" id="nombre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea className="form-control" id="descripcion" required></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input type="number" className="form-control" id="precio" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="id_categoria">Categoría</label>
                    <select className="form-control" id="id_categoria" required>
                      <option value="1">Cookie</option>
                      <option value="2">Cupcake</option>
                      <option value="3">Alfajor</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="imagen">Imagen (URL)</label>
                    <input type="text" className="form-control" id="imagen" required />
                  </div>
                  <div className="form-group espacio">
  <label>Ingredientes</label>
  <div className="ingredientes-list">
    {ingredientes.map((ingrediente) => (
      <div key={ingrediente.id} className="ingrediente-item">
        <input
          type="checkbox"
          value={ingrediente.id}
          onChange={manejarIngredienteSeleccionado}
        />
        <label>{ingrediente.Nombre}</label>
      </div>
    ))}
  </div>
</div>



                  <button type="submit" className="btn btn-success">Agregar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
