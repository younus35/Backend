const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    // console.log(req.url); console.log(req.method); console.log(req.headers);
    const url = req.url;
    if(url === '/'){
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><form action="/home" method="POST"><p>Home<p><button type="submit">Send</button></form></body>')
    res.write('<body><form action="/about" method="POST"><p>About<p><button type="submit">Send</button></form></body>')
    res.write('<body><form action="/node" method="POST"><p>Node<p><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();
    }
    
    if(url==='/home' && req.method==='POST'){
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome home</h1></body>')
    res.write('</html>')
    return res.end();
    }
    if(url==='/about' && req.method==='POST'){
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to About Us page</h1></body>')
    res.write('</html>')
    return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome To My Node Js Project</h1></body>')
    res.write('</html>')
})

server.listen(3000);

//above is an example on how to create a routes and send data

// Explain the nodejs event driven architecture?
// Node.js utilizes an event-driven architecture, where actions are triggered by events rather than a sequential flow of control.
// It operates on a single-threaded event loop, which handles asynchronous I/O operations efficiently. Key components include event emitters, listeners,
// and callbacks. When an event occurs, such as a file being read or a network request completing, Node.js emits an event. 
// Registered listeners then execute callbacks to handle these events,allowing for non-blocking, 
// scalable I/O operations. This architecture enables Node.js to handle high concurrency and maintain responsiveness

//How can it basically scale to handle 1000 of requests a sec. 
//What helps node JS even though it is single threaded?
// Node.js can scale to handle thousands of requests per second due to its non-blocking, 
//asynchronous nature. Despite being single-threaded, it efficiently manages I/O operations 
//using event-driven architecture and the event loop. Asynchronous processing allows Node.js to handle
//numerous requests concurrently without getting blocked, ensuring high throughput and responsiveness.
//Additionally, it supports clustering to leverage multi-core systems, allowing multiple Node.
//js processes to run simultaneously and distribute the workload, further enhancing scalability

// What does process.exit do?
// It immediately stops the execution of the Node.js application or node server

// What does req.url , req.header and req.method contain?
// req.url contains the URL path requested by the client, 
// req.header contains the HTTP headers sent by the client, 
// and req.method contains the HTTP method used in the request 
// (e.g., GET, POST, PUT, DELETE).
