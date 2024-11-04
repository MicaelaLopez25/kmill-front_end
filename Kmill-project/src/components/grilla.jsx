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
<<<<<<< HEAD
        style={{ marginTop: "30px", marginBottom: "30px" }}
=======
        style={{ marginTop: "30px", marginBottom: "180px" }}
>>>>>>> ad6e3329e49b3d85bd2c3d378e7465785b93a265
      >
        <div>
          <img className="img-fluid bordes" src={link} alt={description} />
          <h2 className="h3">{titulo}</h2>
          <h4 className="h4">{subtitulo} Ingredientes:</h4>
<<<<<<< HEAD
          <ul className="custom-list">
            {ingredientes.length > 0 ? (
              ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente.Nombre}</li>
              ))
            ) : (
              <li>No hay ingredientes disponibles. </li>
            )}
          </ul>
=======
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
>>>>>>> ad6e3329e49b3d85bd2c3d378e7465785b93a265
        </div>
      </div>
    </>
  );
}
