export function Post({ titulo, description, precio }) {
  return (
    <>
      <div
        className="tarjetita"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div>
          <img
            className="img-fluid bordes"
            src="cookie11.jpg"
            alt={description}
          />
          <h2 className="h3">{titulo}</h2>
          <h5>{precio}</h5>
        </div>
      </div>
    </>
  );
}
