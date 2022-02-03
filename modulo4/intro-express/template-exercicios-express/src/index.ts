import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


// app.method(path, handler)

app.get('/morango', (req, res) => {
    res.send('Hello, world!')
})


app.get('/users', (req, res) => {
    if (req.headers.chave === "valor") {
        res.send("A chave vale: valor")
        } else {
         res.send(" A chave não vale valor")
        }
    })

