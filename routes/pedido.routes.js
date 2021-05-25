const express = require('express');
const pedidoRoutes = express.Router();

const pedidoController = require('../controllers/pedido.controller');

pedidoRoutes.get('/', pedidoController.principal );
pedidoRoutes.get('/buscar', pedidoController.buscar );

pedidoRoutes.post('/nuevo',  pedidoController.nuevo );
pedidoRoutes.put('/editar',  pedidoController.editar );
pedidoRoutes.delete('/eliminar',  pedidoController.eliminar );

module.exports = pedidoRoutes;