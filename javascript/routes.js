//clean up for reqres2
const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    if(url === '/'){
        fs.readFile("home.txt",{encoding: "utf-8"},(err,data) =>{
            if(err){
                console.log(err);
            }
        console.log('data from file is '+data);
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/home" method="POST"><input type="text" name="home"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
        });
        } 
       else if(url==='/home' && req.method==='POST'){
            const body = [];
            req.on('data', (chunk) =>{
                  console.log(chunk);
                  body.push(chunk);
            });
          return req.on('end', ()=>{
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                fs.writeFile('home.txt',message, err => {
                    if(err){
                        console.log(err);
                    }
                    res.statusCode = 302;
                    res.setHeader('Location','/');
                    return res.end();
                });
            });
        }
        else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome To My Node Js Project</h1></body>')
        res.write('</html>')
        }
}

module.exports = requestHandler;
