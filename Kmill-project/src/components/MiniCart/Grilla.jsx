import React from "react";
/*import { Plus, Minus } from "lucide-react";*/
import "./Order.css";

export function Post({
  id,
  category,
  titulo,
  rutaimg,
  description,
  precio,
  quantity,
  updateQuantity,
}) {
  const handleIncrease = () => {
    updateQuantity(category, id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(category, id, quantity - 1);
    }
  };

  return (
    <div
      className="tarjetitacart"
      style={{ marginTop: "30px", marginBottom: "30px" }}
    >
      <div>
        <img className="imagencookie" src={rutaimg} alt={description} />
        <h2 className="h3">{titulo}</h2>
        <h5 className="h3">${precio}</h5>
        <div className="btns">
          <button className="btncart" onClick={handleDecrease}>
            <Minus className="w-4 h-4" />
          </button>
          <span className="cant" style={{ color: "black" }}>
            {quantity}
          </span>
          <button className="btncart" onClick={handleIncrease}>
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
