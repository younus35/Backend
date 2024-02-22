// 1)how does internet works?
// The internet is a global network of interconnected computers that communicate using a standardized set of rules called protocols. 
// Data travels across the internet in small packets, hopping between different devices and networks until it reaches its destination.
// This communication is facilitated by network infrastructure such as routers, switches, and servers. 
// Websites and services are hosted on servers connected to the internet, and
// users access them using devices like computers, smartphones, or tablets, through 
// internet service providers (ISPs) or other network connections.
// we will use HTTP or HTTPS for transffering data and loading pages.

// What are the core modules of node js?explain each one?
// The core modules of Node.js include:
// fs: Provides file system operations.
// http: Allows creating HTTP servers and clients.
// https: Similar to http, but for secure HTTPS connections.
// path: Helps with handling file paths.
// events: Facilitates event-driven programming.
// util: Provides utility functions.
// os: Allows interaction with the operating system.
// stream: Provides interfaces for working with streaming data.
// process: Allows interaction with the current Node.js process.
// crypto: Provides cryptographic functionality.
// net: Facilitates network-related operations.

// What are relative path and absolute path? How to define them?
// Relative paths and absolute paths are ways of specifying the location of a file or directory within a file system.
// Relative Path: A relative path specifies the location of a file or directory relative to the current working directory. 
// It doesn't start with the root directory. Instead, it describes the path from your current location.
// Example:
// If your current directory is /home/user, and you want to refer to a file example.txt located in the directory /home/user/documents, 
// you can use the relative path documents/example.txt.
// Absolute Path: An absolute path specifies the complete path of a file or directory from the root directory. 
// It starts from the root directory and includes all directories leading to the file or directory.
// Example:
// The absolute path to the same example.txt file mentioned earlier would be /home/user/documents/example.txt.

// What does createServer do?
// createServer is a method in Node.js that creates an HTTP server instance,
//  allowing your code to handle incoming HTTP requests and send back responses.

//What are anonymous functions?
// Anonymous functions in JavaScript are functions that are defined without a name. 
// They are typically used when a function is only needed temporarily or as a parameter to another function.

// What do you think server.listens exactly do?Why do we need it?
// In Node.js, server.listen() is a method used to start the server listening for incoming connections on a specified port and host. 
// It tells the server to start accepting connections from clients.
// We need server.listen() because it is what allows the server to actively listen for incoming requests. Without it, 
// the server would not be able to receive and handle any incoming connections. 
// It essentially sets up the server to be operational and ready to handle requests from clients.

const http = require('http');

const server = http.createServer((req ,res)=>{
         //console.log(req);
        console.log('younus')
});

server.listen(4000);
