// I want you to read all the messages from the file and show it at the top of the form.
const http = require('http');
const routes = require('./routes');
//routes cam be obj when we write module.exports as an object the we could acces the
//specific function by routes.requestHandler(routes.key) in the below argument
const server = http.createServer(routes);
console.log("nodemon");

server.listen(3000);