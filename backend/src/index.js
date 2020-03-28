//Importando bibliotecas e arquivos
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//Artibuindo a app todos os recursos do express
const app = express();

//Definindo utilizações
app.use(cors());
app.use(express.json());
app.use(routes);

//Ouvindo a porta :3333
app.listen(3333);