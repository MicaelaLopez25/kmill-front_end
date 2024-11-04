export function Post({
  titulo,
  link,
  description,
  parrafo,
  subtitulo,
  ingredientes,
}) {
  return (
    <>
      <div
        className="tarjetita"
        style={{ marginTop: "30px", marginBottom: "180px" }}
      >
        <div>
          <img className="img-fluid bordes" src={link} alt={description} />
          <h2 className="h3">{titulo}</h2>
          <h4 className="h4">{subtitulo} Ingredientes:</h4>
          <div>
            <ul className="custom-list">
              {ingredientes.length > 0 ? (
                ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente.Nombre}</li>
                ))
              ) : (
                <li>No hay ingredientes disponibles. </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
