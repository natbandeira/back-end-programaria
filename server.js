const express = require('express');

const app = express();
const porta = 3333;

const mostraPorta = () => console.log(`Servidor criado e rodando na porta ${porta}`);

app.listen(porta, mostraPorta);

// mostraPorta();



