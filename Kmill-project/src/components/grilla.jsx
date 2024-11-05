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
<<<<<<< HEAD
        style={{ marginTop: "30px", marginBottom: "30px" }}
        //style={{ marginTop: "30px", marginBottom: "180px" }}
=======
        style={{ marginTop: "30px", marginBottom: "180px" }}
>>>>>>> 50a0a7bb0b8b2b99d51de3ffff11f1691eabc569
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
