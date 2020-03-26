const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Listagem de todas as ongs
/*routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});*/

//Cadastro de ongs
/*routes.post('/ongs', async (request, response) => {
    //return response.send('Hello World.');
    //Pegando parâmetros Query: const params = request.query;
    //Pegando parâmetros Route: const params = request.params;
    //Pegando parâmetros body:  
    //const params = request.body;
    //console.log(params);

    

    return response.json({
        Evento: 'Semana OminiStack 11.0',
        Aluno: 'Diego Fernandes'
    });
});*/

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', IncidentController.show);

routes.post('/sessions', SessionController.create);

module.exports = routes;