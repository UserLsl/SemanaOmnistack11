//Importando a conexão com o banco
const connection = require('../database/connection');
//Importando utilitário crypto
const crypto = require('crypto');


module.exports = {
    //Procedimento de criação
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({id});
    },
    //Procedimento de visualização todos
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
};