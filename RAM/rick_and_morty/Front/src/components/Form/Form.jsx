import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={submitHandler} className={style.mainContainer}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{errors.username}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Form;







// import React, { useState } from "react";
// import validation from "./validation";


// const Form = ({login}) => {
//   const [userData, setUserData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState ({
//     username: "",
//     password: "",

//   })

//   const handleInputChange = (event) => {
//     const property= event.target.name; //cual es la propieda que quiero modificar
//     const value = event.target.value; //se saca el valor de lo que escribimos

//     setUserData({...userData, [property]: value}); //property tiene guardado a userName que toma el value
//     validation({ ...userData, [property]: value}, errors, setErrors);//setErrors es una funcion
//   };

// const submitHandler = (event) => {
//     event.preventDefault();//prevent previene el comportamiento por defecto
//     login(userData);
// };

//   return (
//     <form onSubmit={submitHandler}> {/*el evento submit es un evento de formulario, no de boton*/}
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input //esto es una cajita de texto
//           type="text"
//           name="username"
//           value={userData.username}
//           onChange={handleInputChange} //cuando se escribe en el input se dispara a la funcion handleInputChange
//         />
//         <p>{errors.username}</p>

//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="text"
//           name="password"
//           value={userData.password}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button>LogiN</button>
//     </form>
//   );
// };

// export default Form;
