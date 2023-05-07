const mongoose = require('mongoose');
require('dotenv').config();

async function conectaBanco() {
    try {
        console.log('Conexão com o banco de dados iniciou :D');

        await mongoose.connect(process.env.MONGO_URL);
        
        console.log('Conexão com o banco de dados feita com sucessowww');
    } catch(erro) {
        console.log(erro);
    }
}

module.exports = conectaBanco;