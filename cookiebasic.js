const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url, req.headers.cookie);
    res.writeHead(200,{'Set-Cookie': 'mycookie=test'});
    res.end('Hello Cookie')

})

    .listen(8083,()=>{ 
        console.log('8083 port is waiting for you')

    })
