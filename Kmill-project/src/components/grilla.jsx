export function Post({ titulo, link, description, parrafo, subtitulo }) {
  return (
    <>
      <div
        className="tarjetita"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div>
          <img className="img-fluid bordes" src={link} alt={description} />
          <h2 className="h3">{titulo}</h2>
          <h4 className="h4">{subtitulo} </h4>
          <p className="h4">{parrafo}</p>
        </div>
      </div>
    </>
  );
}
