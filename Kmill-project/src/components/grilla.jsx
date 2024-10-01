export function Post({ titulo, link, description, parrafo }) {
    return (
      <>
        <div className="tarjetita">
        
          <img className="fotoTamaño" src={link} alt={description} />
           <h2>{titulo}</h2>
           <div className="alturaTarjeta">
           <p>{parrafo}</p>
            </div>
          </div>
      
      </>
    );
   }
   
   
   
   
   