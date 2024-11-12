import { useState } from 'react';
import { Clock, Check } from 'lucide-react';

interface Pedido {
  id: number;
  fecha: string;
  total: number;
  estado: string;
  productos: { nombre: string; cantidad: number; precio: number }[];
}

const PedidoRealizado = () => {
  const [pedido, setPedido] = useState<Pedido>({
    id: 1234,
    fecha: '2023-12-12',
    total: 100.0,
    estado: 'Entregado',
    productos: [
      { nombre: 'Producto 1', cantidad: 2, precio: 20.0 },
      { nombre: 'Producto 2', cantidad: 1, precio: 30.0 },
      { nombre: 'Producto 3', cantidad: 3, precio: 10.0 },
    ],
  });

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Detalles del pedido</h2>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          Pedido #<span className="font-bold">{pedido.id}</span>
        </p>
        <p className="text-gray-600">
          Fecha: <span className="font-bold">{pedido.fecha}</span>
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          Total: <span className="font-bold">${pedido.total}</span>
        </p>
        <p className="text-gray-600">
          Estado: <span className="font-bold">{pedido.estado}</span>
        </p>
      </div>
      <h3 className="text-lg font-bold mb-4">Productos</h3>
      <ul className="list-none mb-4">
        {pedido.productos.map((producto, index) => (
          <li key={index} className="flex justify-between mb-2">
            <p className="text-gray-600">
              {producto.nombre} x {producto.cantidad}
            </p>
            <p className="text-gray-600">${producto.precio}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <Check className="mr-2" />
          Confirmar entrega
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <p className="text-gray-600">
          <Clock className="mr-2" />
          Pedido realizado con éxito
        </p>
      </div>
    </div>
  );
};

export default PedidoRealizado;