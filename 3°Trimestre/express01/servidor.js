// Importação moderna com ESM (import)
import express from 'express'

const app = express() // Instanciar Express

app.get('/', (req, res) => {
    res.send(`<h3>Pagina Inicial</h3>\n<p>Loja especializada em mogar os betinhas!</p>`)
})

app.get('/sobranada', (req, res) => {
    res.send('sobra nada para o betinha:(')
})

app.listen(3000, ()=>{console.log('Servidor está vivo!!!!!')})