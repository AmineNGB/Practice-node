const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Hello USer to Node.JS</h1>');
        res.write('<form action="/create-user" method="POST">USERNAME: <input type="text" name="username" /><button type="submit">Submit</button></form></body>');
        res.write('</html>')
        return res.end();   
    }
    if(url==='/users'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>')
        return res.end();   
    }
    if(url==='/create-user'){
        const body = [];
        req.on('data', (chunk) => {
        //console.log(chunk);
        body.push(chunk);
        });
        return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const user = parsedBody.split('=')[1];
        console.log(user);
        });
    }
});
server.listen(3000);