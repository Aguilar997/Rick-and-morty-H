const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //esto es para permitir la peticion a otros

    const { url } = req;

    if (req.url.includes("rickandmorty/character")) {
      let id = url.split("/").at(-1); //-1: lo que permite es tomar posiciones especificas de un array
      let character = data.find((char) => char.id == id);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      } else {
        res.writeHead(400, { "Content Type": "application/json" });
        return res.end(JSON.stringify({ error: "character not found" }));
      }
    }
  })
  .listen(3001, "localhost");
