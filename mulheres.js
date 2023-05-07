const express = require('express'); // iniciando express
const router = express.Router(); // configurando 1ª parte da rota
const cors = require('cors'); // trazendo o pacote cors: permite consumir essa API no frontend


const conectaBanco = require('./bancoDeDados'); // conectando ao arquivo bandoDeDados.js
conectaBanco(); // chamando função (do arquivo conectado acima) que conecta o banco de dados

const Mulher = require('./mulherModel'); // conecta a Model

const app = express(); // iniciando app
app.use(express.json()); // configurando formato JSON
app.use(cors());

const porta = 3333; // criando porta

// GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBanco = await Mulher.find();

        response.json(mulheresVindasDoBanco);

    }catch(erro){
        console.log(erro);
    }
}

// POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada);   
    } catch(error) {
        console.log(error);
}
}
// PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada =  await Mulher.findById(request.params.id); // parametros são passadas na URL

        //procurando qual objeto foi alterado e atualizando seu valor, qnd encontrado
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem;
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio;
        }

        if (request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao;
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save(); // salvando no banco de dados o novo valor de mulherEncontrada
        response.json(mulherAtualizadaNoBancoDeDados); // enviando em JSON a variável

    } catch(error) {
        console.log(error);
    }
}

// DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id);
        response.json({ mensagem : 'Mulher deletada com sucesso!'})
    } catch (erro) {
        console.error(erro);
    }
}

// PORTA
const mostraPorta = () => console.log(`Servidor criado e rodando na porta ${porta}`);

// 2ª configuração de rotas 
app.use(router.get('/mulheres', mostraMulheres)); 
app.use(router.post('/mulheres', criaMulher)); 
app.use(router.patch('/mulheres/:id', corrigeMulher));
app.use(router.delete('/mulheres/:id', deletaMulher));
app.listen(porta, mostraPorta); // servidor ouvindo porta

// mostraPorta();


