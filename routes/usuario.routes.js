const express = require('express');
const UsuarioRoutes = express.Router();

const UsuarioController = require('../controllers/usuario.controller');

UsuarioRoutes.get('/', UsuarioController.principal );
UsuarioRoutes.get('/buscar', UsuarioController.buscar );

UsuarioRoutes.post('/registro',  UsuarioController.registro );
UsuarioRoutes.post('/login',  UsuarioController.login );




module.exports = UsuarioRoutes;

