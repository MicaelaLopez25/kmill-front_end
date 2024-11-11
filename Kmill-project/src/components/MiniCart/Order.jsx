import React, { useEffect, useState } from "react";
import { Post } from "./Grilla";
import Footer from "../FooterYCss/Footer";
import Header from "../Header";
import "./Order.css";

function Cookieorder() {
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
              precio={cookie.Precio}
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
              precio={alfajor.Precio}
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
              precio={cupcake.Precio}
              quantity={quantities.cupcakes[cupcake.id] || 0}
              updateQuantity={updateQuantity}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cookieorder;
