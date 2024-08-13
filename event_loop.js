const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Welcome to the server')
        res.end()
    } else if (req.url === '/about') {

        // Blocking code
        // for(let i = 0; i < 10000; i++) {
        //     console.log(Math.random() * i)
        // }

        res.write('About page')
    } else {
        res.end('Not found')
    }
})

server.listen(3000)
console.log('Server on port 3000')