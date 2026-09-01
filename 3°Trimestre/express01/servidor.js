// Importação moderna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})

app.get('/sobranada', (req, res) => {
    res.send('sobra nada para o betinha:(')
})

app.listen(3000, ()=>{console.log('Servidor')})