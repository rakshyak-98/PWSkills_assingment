import http from "http";
import { productsForMen, productsForWomen } from "./data.js";
const HOST_NAME = "localhost";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  if (req.url == "/") res.end("Welcome to Men & Women Dummy Data");
  if (req.url == "/men") res.end(JSON.stringify(productsForMen));
  if (req.url == "/women") res.end(JSON.stringify(productsForWomen));
  if (req.url == "/other") {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.end("<h1>page not found </h1>");
  }
});
server.listen(3001, HOST_NAME, () =>
  console.log("express server listening on port 3001")
);
