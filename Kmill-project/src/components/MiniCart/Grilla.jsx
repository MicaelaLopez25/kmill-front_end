import "./Order.css";

export function Post({ titulo, rutaimg, description, precio }) {
  return (
    <>
      <div
        className="tarjetita"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div>
          <img className="imagencookie" src={rutaimg} alt={description} />
          <h2 className="h3">{titulo}</h2>
          <h5 className="h3">${precio}</h5>
        </div>
      </div>
    </>
  );
}
