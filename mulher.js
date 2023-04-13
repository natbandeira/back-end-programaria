const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher (request, response) {
    response.json({
        nome: 'Tracy Chapman',
        imagem: 'https://bit.ly/tracyChapman',
        minibio: 'Tracy Chapman é uma cantora estadunidense de folk, blues, soul e pop rock, vencedora de 4 prêmios Grammy Awards, tornada mundialmente famosa por suas canções "Fast Car", "Baby Can I Hold You" e "Give Me One Reason".'
    })
}
app.use(express.json())

const mostraPorta = () => console.log(`Servidor criado e rodando na porta ${porta}`);

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);

// mostraPorta();


