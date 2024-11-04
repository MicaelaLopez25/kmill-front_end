export function Post({ titulo, link, description, subtitulo, precio }) {
  return (
    <>
      <div
        className="tarjetita"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div>
          <img className="img-fluid bordes" src={link} alt={description} />
          <h2 className="h3">{titulo}</h2>
          <h4 className="h4">{subtitulo} precios:</h4>
          <h5>{precio}</h5>
        </div>
      </div>
    </>
  );
}
