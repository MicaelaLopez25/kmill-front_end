import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Post } from "./Grilla";
import Footer from "../FooterYCss/Footer";
import Header from "../Header";
import "./Order.css";

function Cookieorder() {

  const [products, setProducts] = useState({
    cookies: {},
    alfajores: {},
    cupcakes: {},
  });
    
  const [cookies, setCookies] = useState([]);
  const [cupcakes, setCupcakes] = useState([]);
  const [alfajores, setAlfajores] = useState([]);

  // Quantity state for each product category
  const [quantities, setQuantities] = useState({
    cookies: {},
    cupcakes: {},
    alfajores: {},
  });

  // Function to update quantity for a specific item
  const updateQuantity = (category, id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [category]: {
        ...prevQuantities[category],
        [id]: quantity,
      },
    }));
  };

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/cookiepedido");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setCookies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCookies();
  }, []);

  useEffect(() => {
    const fetchAlfajores = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/alfajorpedido");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setAlfajores(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAlfajores();
  }, []);

  useEffect(() => {
    const fetchCupcakes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/cupcakepedido");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setCupcakes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCupcakes();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cookieResponse = await axios.get("http://127.0.0.1:5000/cookiepedido");
        const alfajorResponse = await axios.get("http://127.0.0.1:5000/alfajorpedido");
        const cupcakeResponse = await axios.get("http://127.0.0.1:5000/cupcakepedido");

        setProducts({
          cookies: cookieResponse.data,
          alfajores: alfajorResponse.data,
          cupcakes: cupcakeResponse.data,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const getProductPrice = (id) => {
    // Buscar en las cookies
    const cookie = products.cookies.find(product => product.id === id);
    if (cookie) return cookie.Precio;

    // Buscar en los alfajores
    const alfajor = products.alfajores.find(product => product.id === id);
    if (alfajor) return alfajor.Precio;

    // Buscar en los cupcakes
    const cupcake = products.cupcakes.find(product => product.id === id);
    if (cupcake) return cupcake.Precio;

    return 0; // Si no se encuentra el producto, aunque esto no debería suceder
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleFinalizeOrder = async () => {
    const orderData = {
      estado: "En proceso",
      usuario: 2,
      fecha: formatDate(new Date()), // Formatear la fecha correctamente
      metodopago: "Efectivo",
      productos: [],
    };
  
    for (const category in quantities) {
      for (const id in quantities[category]) {
        const quantity = quantities[category][id];
        if (quantity > 0) {
          const price = getProductPrice(parseInt(id));
          const p = {producto: id,
              cantidad: quantity,
              precio: price};
          orderData.productos.push(p)    
        }
      }
    }
  
    try {
      const response = await axios.post("http://127.0.0.1:5000/pedidos", orderData);
      console.log(response.data);
    } catch (error) {
      console.error("Error al finalizar el pedido:", error.response.data); // Muestra el error del servidor
    }
  };

  

  return (
    <div className="separadorcart">
      <div>
        <h1 className="fuente-titulocart">Cookies</h1>
        <ul className="containercart">
          {cookies.map((cookie) => (
            <Post
              key={cookie.id}
              id={cookie.id}
              category="cookies"
              titulo={cookie.Nombre}
              rutaimg={cookie.imagen}
              description={cookie.Descripcion}
              precio_producto={cookie.Precio}
              quantity={quantities.cookies[cookie.id] || 0}
              updateQuantity={updateQuantity}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="fuente-titulocart">Alfajores</h1>
        <ul className="containercart">
          {alfajores.map((alfajor) => (
            <Post
              key={alfajor.id}
              id={alfajor.id}
              category="alfajores"
              titulo={alfajor.Nombre}
              rutaimg={alfajor.imagen}
              description={alfajor.Descripcion}
              precio_producto={alfajor.Precio}
              quantity={quantities.alfajores[alfajor.id] || 0}
              updateQuantity={updateQuantity}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="fuente-titulocart">Cupcakes</h1>
        <ul className="containercart">
          {cupcakes.map((cupcake) => (
            <Post
              key={cupcake.id}
              id={cupcake.id}
              category="cupcakes"
              titulo={cupcake.Nombre}
              rutaimg={cupcake.imagen}
              description={cupcake.Descripcion}
              precio_producto={cupcake.Precio}
              quantity={quantities.cupcakes[cupcake.id] || 0}
              updateQuantity={updateQuantity}
            />
          ))}
        </ul>
      </div>
      <button onClick={handleFinalizeOrder}>Finalizar Pedido</button>
    </div>
  );
}

export default Cookieorder;
