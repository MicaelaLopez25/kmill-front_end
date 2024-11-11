import React, { useEffect, useState } from "react";
import { Post } from "./grilla";
import Header from "./Header";
import Footer from "./FooterYCss/Footer";

// Simulando los productos
const posts = [
  {
    id: 1,
    titulo: 1,
    Descripcion: "Joylne Cuyoj",
    link: "/oreocookie.jpg",
  },
  {
    id: 2,
    titulo: 1,
    Descripcion: "Joylne Cuyoj",
    link: "/cookie1.jpg",
  },
  {
    id: 3,
    titulo: 1,
    Descripcion: "Joylne Cuyoj",
    link: "/cokie2.jpg",
  },
  {
    id: 4,
    titulo: "Cookie con chocolina",
    Descripcion: "Joylne Cuyoj",
    link: "/cookienormal.jpg",
  },
  {
    id: 5,
    titulo: 2,
    Descripcion: "f",
    link: "cookiechocolina.jpg",
  },
  { id: 1, titulo: 1 },
  { id: 2, titulo: 2, link: 2 },
  { id: 3, titulo: 1, link: "/cokie2.jpg" },
];

const Cookieitems = () => {
  const [products, setProducts] = useState([]);
  const [ingredientes, setIngredientes] = useState({});
  const [productosCargados, setProductosCargados] = useState(new Set());
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productoEditado, setProductoEditado] = useState(null);

  // Función para eliminar duplicados
  const eliminarDuplicados = (array) => {
    return [...new Set(array)];
  };

  // Verificar si el usuario es Admin
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "Admin") {
      setIsAdmin(true); // Si es Admin, actualizamos el estado
    }
  }, []);

  // Obtener productos desde la API
  useEffect(() => {
    fetch("http://127.0.0.1:5000/jsonproducto")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  // Obtener ingredientes para cada producto
  useEffect(() => {
    if (products.length > 0) {
      products.forEach((producto) => {
        if (!productosCargados.has(producto.id)) {
          fetch(http://127.0.0.1:5000/ingrediente_producto/${producto.id})
            .then((data) => data.json())
            .then((data) => {
              const ingredientesUnicos = eliminarDuplicados(data);
              setIngredientes((prev) => ({
                ...prev,
                [producto.id]: ingredientesUnicos,
              }));
              setProductosCargados((prev) => new Set(prev.add(producto.id)));
            });
        }
      });
    }
  }, [products, productosCargados]);

  // Función para manejar la modificación de un producto
  const handleModificarClick = (producto) => {
    setProductoEditado(producto);
    setIsModalOpen(true); // Abrir el modal de edición
  };

  // Función para manejar los cambios en el formulario de edición
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductoEditado((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para guardar los cambios en el producto
  const handleGuardarCambios = () => {
    fetch(http://127.0.0.1:5000/productoActualizar/${productoEditado.id}, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: productoEditado.Nombre,
        descripcion: productoEditado.Descripcion,
        precio: productoEditado.Precio,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Producto actualizado exitosamente") {
          setProducts((prevProducts) =>
            prevProducts.map((producto) =>
              producto.id === productoEditado.id ? productoEditado : producto
            )
          );
        } else {
          alert("Error al actualizar el producto");
        }
      })
      .catch((error) => {
        alert("Hubo un problema con la solicitud de actualización");
        console.error("Error:", error);
      });

    setIsModalOpen(false); // Cerrar el modal
    setProductoEditado(null); // Limpiar el producto editado
  };

  // Función para cerrar el modal sin guardar cambios
  const handleCerrarModal = () => {
    setIsModalOpen(false); // Cerrar modal
    setProductoEditado(null); // Limpiar el producto editado
  };

  return (
    <body className="fondoCookies">
      {/* en realidad no se usa el body aca*/}
      <Header />
      <div>
        <h1 className="fuente-titulo">Productos</h1>
        <ul className="container-cookies">
          {products.map((producto, index) => (
            <li key={producto.id || index} className="producto-item">
              <Post
                titulo={producto.Nombre || "Producto sin título"}
                Descripcion={producto.Descripcion}
                link={producto.imagen || "Sin imagen"}
                ingredientes={ingredientes[producto.id] || []}
              />
              {/* Mostrar el botón de modificación solo si es Admin */}
              {isAdmin && (
                <button
                  className="buttonModificar"
                  onClick={() => handleModificarClick(producto)}
                >
                  Modificar Producto
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal para editar el producto */}
      {isModalOpen && productoEditado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Modificar Producto</h2>
            <form className="modal-form">
              <div className="modal-input">
                <label>Nombre</label>
                <input
                  type="text"
                  name="Nombre"
                  value={productoEditado.Nombre}
                  onChange={handleInputChange}
                  className="modal-input-field"
                />
              </div>
              <div className="modal-input">
                <label>Descripción</label>
                <input
                  type="text"
                  name="Descripcion"
                  value={productoEditado.Descripcion}
                  onChange={handleInputChange}
                  className="modal-input-field"
                />
              </div>
              <div className="modal-input">
                <label>Precio</label>
                <input
                  type="number"
                  name="Precio"
                  value={productoEditado.Precio}
                  onChange={handleInputChange}
                  className="modal-input-field"
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={handleGuardarCambios}
                  className="btnVentana"
                >
                  Guardar Cambios
                </button>
                <button
                  type="button"
                  onClick={handleCerrarModal}
                  className="btnVentana"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </body>
  );
};

export default Cookieitems;