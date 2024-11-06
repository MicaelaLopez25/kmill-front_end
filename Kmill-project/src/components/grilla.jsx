export function Post({
  titulo,
  link,
  Descripcion,
  ingredientes,
}) {
  return (
    <>
      <div
        className="tarjetita"
        style={{ marginTop: "30px", marginBottom: "30px" }}
        //style={{ marginTop: "30px", marginBottom: "180px" }}
        style={{ marginTop: "30px", marginBottom: "180px" }}

      >
        <div>
          <img className="img-fluid bordes" src={link} alt={Descripcion} />
          <h2 className="h3">{titulo}</h2>
          <ul className="custom-list">
            {ingredientes.length > 0 ? (
              ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente.Nombre}</li>
              ))
            ) : (
              <li>No hay ingredientes disponibles. </li>
            )}
          </ul>
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
