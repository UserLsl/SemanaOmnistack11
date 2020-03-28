//Importando Express
const express = require('express');

//Importando Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

//Resgatando funcionalidade de rota do express
const routes = express.Router();

//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//Incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', IncidentController.show);
//Sessions
routes.post('/sessions', SessionController.create);

//Exportando rotas
module.exports = routes;