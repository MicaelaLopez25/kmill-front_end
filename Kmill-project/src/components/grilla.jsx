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
          <h4 className="h4">{subtitulo} Ingredientes </h4>
           <ul className="custom-list">
            <li><p className="parrafo">  {parrafo}</p></li>
          </ul>
          
        </div>
      </div>
    </>
  );
}
