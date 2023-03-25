import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();

  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;













// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Detail = () => {
//   const { detailId } = useParams(); //PARAMS ME DA UN OBJ QUE TIENE LOS VALORES DE LA URL QUE YO NECESITO TENER GUARDADO EN ALGUN LADO DEL detailId
//   //CUANDO LE DOY CLICK EN EL NOMBRE DEL PERSONAJE, ME GUARDA EL ID DE LA RUTA X EJ HOME/5, ESE NUMERO ES DETERMINADO
//   //POR EL OBJ Y NO POR EL CLICK QUE DOY (CUANDO DOY 1 CLICK = HOME/1, 2 CLICK= HOME/2 DEL PERSONAJE EN LA RUTA)
//   const [character, setCharacter] = useState({}); //ESTO ES UN ESTADO LOCAL, HAY QUE IMPORTARLO DE REACT

//   useEffect(() => {
//     const URL_BASE = "https://be-a-rym.up.railway.app/api";
//     const KEY = "ab05c601ff3a.3227a5f58ca0da9bd460";

//     axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then(
//       (response) => setCharacter(response.data) //ACA SE HACE LA PETICION. AXIOS ME DA UNA RESPONSE Y YO QUIERO HACER UNA SETCHARACTER DE RESPONSE.DATA
//     ); //DE LA RESPUESTA QUE ME DA AXIOS HAY UNA PROPIEDAD QUE SE LLAMA DATA
//   }, []);
//   //use effect tiene {cb} y [array]. La cb se va a ejecutar cuando el componente se monte
//   return (
//     <div>
//       {character.name ? ( //? SI ESTO SE CUMPLE MOSTRA ESTO:
//         <>
//           <h2>{character.name}</h2>
//           <p>{character.status}</p>
//           <p>{character.species}</p>
//           <p>{character.gender}</p>
//           <p>{character.origin?.name}</p>
//           <img src={character.image} alt="img" />
//         </>
//       ) : (
//         //: SINO MOSTRA LOADING
//         <h3> Loading...</h3> //1RO SE MUESTRA ESTO Y LUEGO EL '?' PORQUE AL DEMORARSE SE RENDERIZA 1RO EL ':' Y UNA VEZ RENDERIZADO EL '?' SE MODIFICA EL ESTADO
//         //Y SE MUESTRA LOS CHARACTER DEL '?'
//       )}
//     </div>
//   );
// };
// export default Detail;

// //TERNARIO: PREGUNTA ? POSITIVA :(ELSE) NEGATIVA
