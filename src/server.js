// importar dependencia 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// iniciando o express
const server = express()

server
// utilizado os arquuivos estaticos


.use(express.static('public'))

// criar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')


// rotas da aplicação 
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages',pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

// ligar o servidor 
server.listen(5500)



//parei na aula 3 57:36