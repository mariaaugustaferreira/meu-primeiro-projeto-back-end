const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, reponse) {
    reponse.json({
        nome: 'Maria Augusta',
        imagem : 'https://avatars.githubusercontent.com/u/163880653?v=4',
        minibio: 'Estudante e mae'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)