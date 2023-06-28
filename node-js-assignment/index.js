const fs = require("fs");
const filename = "nodejs_architecture.md";
const filedata =
  "# Node js \n - Node.js is an open-source, server-side runtime environment built on Chrome's V8 JavaScript engine.\n - It provides a powerful and efficient platform for executing JavaScript code outside the web browser, allowing developers to build scalable and high-performance network applications. - The architecture of Node.js is designed around an event-driven, non-blocking I/O model, which makes it well-suited for handling concurrent requests and optimizing resource utilization.\n\n ## Internal \n - At the core of Node.js architecture is the event loop, which is responsible for handling incoming requests and executing callbacks in an asynchronous manner. The event loop enables Node.js to efficiently handle multiple requests concurrently without blocking the execution. When a request is received, it is processed asynchronously, and the associated callback function is registered with the event loop. As the event loop cycles through the registered callbacks, it executes them when their associated events occur, such as data being available on a socket or the completion of a file read operation.\n\nNode.js follows a module-based architecture, allowing developers to organize their code into reusable and modular components. Modules in Node.js are self-contained units of functionality that can be easily imported and used in other parts of the application. The module system in Node.js is based on the CommonJS module specification and provides a straightforward way to define, export, and import modules. This modular architecture promotes code reusability, maintainability, and facilitates collaborative development.\n\nAdditionally, Node.js incorporates a single-threaded, event-driven, and non-blocking I/O model, which allows it to efficiently handle a large number of concurrent connections with relatively low resource consumption. This architecture is well-suited for building scalable network applications, such as web servers, chat servers, or real-time communication systems. By leveraging its event-driven nature and non-blocking I/O operations, Node.js can handle concurrent requests without being blocked by time-consuming operations, such as file I/O or network requests, resulting in improved performance and responsiveness.";

fs.writeFile(filename, filedata, (error) => {
  if (error) {
    throw new Error("Not able to create file", {
      cause: { code: "FileError", values: [filename, filedata] },
    });
  }
});

fs.readFile(filename, (error, val) => {
  if (error) {
    return console.log(error);
  }
  return val.toString();
});

fs.appendFile(filename, "\n ### __ENDING LINE__", (error) => {
  if (error) return console.log(error);
});

const os = require("os");

console.log(`Operating system name: ${os.type()}`);
console.log(`OS release: ${os.release()}`);

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1>i am learning full stack develpment from PW skills!</h1>");
});

server.listen(5000);
console.log("listning on port 5000");
