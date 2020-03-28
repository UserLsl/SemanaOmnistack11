//Importando a conexão com o banco
const connection = require('../database/connection');

module.exports = {
    //Procedimento de criação
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        const id = result[0];
        return response.json({id});
    },

    //Procedimento de visualização todos
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    //Procedimento de visualização expecifica
    async show(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    },

    //Procedimento de exclusão
    async delete(request, response){
        const{id} = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }


};