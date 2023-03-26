//1- Importa el módulo http de Node.js para poder crear un servidor HTTP:
const http = require("http");


//2- Define una constante para el puerto en el que el servidor escuchará las solicitudes HTTP:
const PORT = 3000;


//3- Crea una función de devolución de llamada (callback function)
//que se ejecutará cada vez que se reciba una solicitud HTTP en el servidor. La función de devolución de llamada
//toma dos argumentos: la solicitud (request) y la respuesta (response):
const server = http.createServer((req, res) => {


    //4- Configura la respuesta HTTP en la función de devolución de llamada, estableciendo el código de estado HTTP, +
    //la cabecera de la respuesta y el cuerpo de la respuesta:
    res.statusCode = 200; // Código de estado HTTP: 200 significa que todo está bien
    res.setHeader("Content-Type", "text/plain"); // Establecer la cabecera de la respuesta
    res.end("Hola, mundo!\n"); // El cuerpo de la respuesta que se enviará al cliente
});

//En Node.js, establecer la cabecera de la respuesta en Content-Type se refiere a definir el tipo de contenido que se está 
//enviando en la respuesta HTTP. Esto se logra utilizando el método res.set() o res.setHeader() del objeto de respuesta (res)
// en Node.js.

//El tipo de contenido se especifica utilizando el tipo MIME (Multipurpose Internet Mail Extensions), que es un 
//identificador de formato de datos en Internet. Algunos ejemplos comunes de tipos MIME son text/html para documentos HTML,
// application/json para datos JSON, y image/png para imágenes PNG.

//Por ejemplo, si queremos enviar una respuesta en formato JSON, podemos establecer la cabecera de la respuesta en 
//Content-Type como sigue:

//res.setHeader('Content-Type', 'application/json');
//Esto indica al cliente que se espera que el cuerpo de la respuesta sea un objeto JSON, lo que permite al cliente 
//procesar correctamente los datos recibidos. Si la cabecera Content-Type no se establece correctamente, el cliente puede
//tener problemas para interpretar la respuesta recibida.

//En Node.js, res.set() y res.setHeader() son métodos del objeto de respuesta (res) que se utilizan para establecer cabeceras
// HTTP en la respuesta que se envía al cliente.

//Ambos métodos se utilizan para establecer el valor de una cabecera HTTP específica en la respuesta. La diferencia entre ellos 
//es que res.set() es una abreviatura de res.setHeader(). 


//5- Llama al método listen() en el objeto del servidor y pásale el número de puerto en el que deseas que escuche el servidor:
server.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

console.log(htpp)




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
