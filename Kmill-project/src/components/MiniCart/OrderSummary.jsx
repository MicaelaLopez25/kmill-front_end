// OrderSummary.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const location = useLocation();
  const { orderData } = location.state || {}; // Obtener los datos del pedido desde el estado de la ubicación

  if (!orderData) {
    return <div>No hay información del pedido disponible.</div>;
  }

  const totalPrice = orderData.productos.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  return (
    <div>
      <h1>Resumen del Pedido</h1>
      <p><strong>Estado:</strong> {orderData.estado}</p>
      <p><strong>Usuario:</strong> {orderData.usuario}</p>
      <p><strong>Fecha:</strong> {orderData.fecha}</p>
      <p><strong>Método de Pago:</strong> {orderData.metodopago}</p>
      <h2>Productos:</h2>
      <ul>
        {orderData.productos.map((producto, index) => (
          <li key={index}>
            ID: {producto.id}, Cantidad: {producto.cantidad}, Precio: {producto.precio}
          </li>
        ))}
      </ul>
      <h3>Precio Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default OrderSummary;