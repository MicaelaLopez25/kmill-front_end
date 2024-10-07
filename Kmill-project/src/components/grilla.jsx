export function Post({ titulo, link, description, parrafo }) {
  return (
    <>
      <div className="tarjetita">
        <div className="">
          <img className="img-fluid bordes" src={link} alt={description} />
        </div>
        <h2 className="h3">{titulo}</h2>
        <p>{parrafo}</p>
      </div>
    </>
  );
}
