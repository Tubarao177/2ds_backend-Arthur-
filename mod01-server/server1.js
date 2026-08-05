const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8001
// Carrega o caminho dos arquivos
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/index.html')


const server = http.createServer((req, res) =>{
    //Qual informação eu tenho?
    const urlTratada = new URL(req.url, `http://${req.headers.host}`) //Limpeza da URL
    const recurso = urlTratada.pathname //em qual rota estamos?

    if(recurso === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 200
       return res.end('<h3>Página Inicial</h3>')
    if(recurso === '/sobre'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 200
       return res.end('<h3>Página Inicial</h3>')
    } } else{
        res.statusCode = 401
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.statusCode = 401
        res.end('<h3> 401 Não Autorizado!</h3>')
    }


    res.setHeader('Content-Type', 'text/plain')
    res.end('Bem-vindo(a)! \nHomepage \\o/')
})

server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})