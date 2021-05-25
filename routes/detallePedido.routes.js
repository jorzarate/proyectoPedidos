const express = require('express');
const detallePedidoRoutes = express.Router();

const detallePedidoController = require('../controllers/detallePedido.controller');

detallePedidoRoutes.get('/', detallePedidoController.principal );
detallePedidoRoutes.get('/buscar', detallePedidoController.buscar );

detallePedidoRoutes.post('/nuevo',  detallePedidoController.nuevo );
detallePedidoRoutes.put('/editar',  detallePedidoController.editar );
detallePedidoRoutes.delete('/eliminar',  detallePedidoController.eliminar );

module.exports = detallePedidoRoutes;