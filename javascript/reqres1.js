// Make the similar form like the youtuber does which writes to a file and redirects too with 302 response.
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    // console.log(req.url); console.log(req.method); console.log(req.headers);
    const url = req.url;
    if(url === '/'){
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><form action="/home" method="POST"><input type="text" name="home"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();
    } 
    // if(url==='/home' && req.method==='POST'){
    //     fs.writeFileSync('home.txt','DUMMY');
    //     // res.writeHead(302,{});
    //     res.statusCode = 302;
    //     res.setHeader('Location','/');
    //     return res.end();
    // }
    if(url==='/home' && req.method==='POST'){
        const body = [];
        req.on('data', (chunk) =>{
              console.log(chunk);
              body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('home.txt',message);
        });
        // res.writeHead(302,{});
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    // if(url==='/about' && req.method==='POST'){
    // res.write('<html>')
    // res.write('<head><title>My First Page</title></head>')
    // res.write('<body><h1>Welcome to About Us page</h1></body>')
    // res.write('</html>')
    // return res.end();
    // }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome To My Node Js Project</h1></body>')
    res.write('</html>')
})

server.listen(3000);

// What is the use of having buffers and streams? When would you use it?.
// Buffers and streams are used in Node.js for efficient handling of data.
// Buffers are used to work with binary data, such as reading from files or network sockets.
// Streams allow you to read or write data in chunks, enabling efficient handling of large data sets,
// like processing files or network data in chunks rather than loading everything into memory at once.
// You would use buffers and streams in Node.js when dealing with large amounts of data, like reading
// or writing files, processing network data, or handling data in a memory-efficient manner.