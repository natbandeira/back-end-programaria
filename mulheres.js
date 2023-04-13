const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Tracy Chapman',
        imagem: 'https://bit.ly/tracyChapman',
        minibio: 'Tracy Chapman é uma cantora estadunidense de folk, blues, soul e pop rock, vencedora de 4 prêmios Grammy Awards, tornada mundialmente famosa por suas canções "Fast Car", "Baby Can I Hold You" e "Give Me One Reason".'
    },
    {
        nome: 'Iza Sabino',
        imagem: 'https://bit.ly/izaSabino',
        minibio: 'Iza Sabino é uma rapper mineira que reflete sobre vivências LGBTQIA+ e racismo com discurso empoderador em músicas. Em tempos de instabilidade social e política, falar de amor é um ato de resistência. E, quando essa mensagem parte de uma mulher negra LGBTQIA+, isso se torna ainda maior.'
    },
    {
        nome: 'Glória Maria',
        imagem: 'https://bit.ly/gloriaMaria',
        minibio: 'Glória Maria Matta da Silva foi uma jornalista, repórter e apresentadora de televisão brasileira. Considerada um dos maiores símbolos do jornalismo brasileiro, foi a primeira repórter a realizar matérias ao vivo e a cores na televisão no Brasil.'
    }
];

function mostraMulheres(request, response) {
    response.json(mulheres);
}

const mostraPorta = () => console.log(`Servidor criado e rodando na porta ${porta}`);

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);

// mostraPorta();


