const validation = (userData, errors, setErrors) => {
  // username
  if (!userData.username)
    setErrors({ ...errors, username: "Por favor completa este campo" });
  else if (userData.username.length > 35)
    setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "Email inválido" });
  } else {
    setErrors({ ...errors, username: "" });
  }

  // password
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "Longitud de password inválida" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener al menos un número" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validation;

// //esta funcion validation esta en el componente form para modularizar siempre y cuando se usa solo en form
// const validation = (userData, errors, setErrors) => {
//     //username
//     if (!userData.username)
//         setErrors({ ...errors, username: "completar este campo" }); //si no tengo userdata.name entonces = {se ejecuta lo que esta en llave}
//     else if (userData.username.length > 35)
//         setErrors({ ...errors, username: 'superaste los 35 caracteres' });
//     else if (
//         !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)//!: si t/d esto no se cumple se ejecuta el setErrors de email invalido
//     ) {
//         setErrors({ ...errors, username: 'Email invalido' })
//     } else {
//         setErrors({ ...errors, username: "" })
//     }

//     //password

//     if (userData.password.length < 6 || userData.password.length > 10) {
//         setErrors({ ...errors, password: 'longitud de password invalid' });
//     } else if (!/\d/.test(userData.password)) {
//         setErrors({ ...errors, password: 'debe contener al menos un numero' });
//     } else {
//         setErrors({ ...errors, password: "" })
//     }
// };

// export default validation;
