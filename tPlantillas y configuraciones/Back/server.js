//1- Importa el módulo http de Node.js para poder crear un servidor HTTP:
const http = require("http");


//2- Define una constante para el puerto en el que el servidor escuchará las solicitudes HTTP:
const PORT = 3000;


//3- Crea una función de devolución de llamada (callback function)
//que se ejecutará cada vez que se reciba una solicitud HTTP en el servidor. La función de devolución de llamada
//toma dos argumentos: la solicitud (request) y la respuesta (response):
const server = http.createServer((req, res) => {


    //4- Configura la respuesta HTTP en la función de devolución de llamada, estableciendo el código de estado HTTP, la cabecera de la respuesta y el cuerpo de la respuesta:
    res.statusCode = 200; // Código de estado HTTP: 200 significa que todo está bien
    res.setHeader("Content-Type", "text/plain"); // Establecer la cabecera de la respuesta
    res.end("Hola, mundo!\n"); // El cuerpo de la respuesta que se enviará al cliente
});


//5- Llama al método listen() en el objeto del servidor y pásale el número de puerto en el que deseas que escuche el servidor:
server.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

console.log(htpp)


//6- Ejecuta el servidor con el comando node app.js (siendo "server.js" el nombre de tu archivo). Si todo funciona correctamente,
// verás un mensaje en la consola que indica que el servidor está escuchando en el puerto que definiste.

//ACLARACION: DENTRO DEL SERVIDOR EN EL CB VA ESTO= res.setHeader('Access-Control-Allow-Origin', '*'); SIRVE PARA QUE CUALQUIERA PUEDANTENER ACCESO AL BACK DESDE EL CLIENTE


//----------------CODIGO LIMPIO------------------- ↓

// const http = require('http');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola, mundo!\n');
// });

// server.listen(PORT, () => {
//   console.log(`El servidor está escuchando en el puerto ${PORT}`);
// });
