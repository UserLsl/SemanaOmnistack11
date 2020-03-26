const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    * Rota: http://localhost:3333/users
    * Recurso: /users
*/

/*
    * Métodos HTTP:
        * GET: Buscar/Listar uma informação do back-end
        * POST: Criar uma informação no back-end
        * PUT: Alterar uma informação no back-end
        * DELETE: Deletar uma informação no back-end
*/

/*
    * Tipos de parãmetros:
        * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, páginação). Ex.: .../users?name=lucas&idade=25&page=2 (app.get('/users')
        * Route Params: Parâmetros utilizados para identificar recursos. Ex.: .../users/1  app.get('/users/:id')
        * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    * Nodemon: npm install nodemon -D
    * Dentro de package.json add: "start": "nodemon index.js"
    * Executar: npm start
*/

/*  
    * Banco de Dados
        * Tipos:
            * SQL: MySQL, --> SQLite <--, PostgreSQL, Oracle, Microsoft SQL Server
            * NoSQL: MongoDB, CouchDB, etc...
        * Utilização:
            * Driver: Select * From users
            * Query Buider: table('users').select('*').where()
                * Instalação: (http://knexjs.org/)
                    *  CMD ADMIN
                    *  Add dependencia dev: "node-pre-gyp": "0.12.0"
                    *  Executar: npm install sqlite3
                    *  Executar: npm install knex
                    *  Executar: npx knex init
                * Migrations
                    *  Criar pastas database/migrations
                    *  Em knexfile.js adicionar: {directory: './src/database/migrations'}
                    *  Criar migration com comando: npx knex migrate:make create_ongs
                    *  Rodar/executar migration, Comando: npx knex migrate:latest
                    *  Voltar execução migration, comando: npx knex migrate:rollback
                    *  Histórico de migrations, Comando: npx knex migrate:status
                    * 
*/



app.listen(3333);