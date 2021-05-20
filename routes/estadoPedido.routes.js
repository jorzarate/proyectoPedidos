const express = require('express');
const estadoPedidoRoutes = express.Router();

const estadoPedidoController = require('../controllers/estadoPedido.controller');

estadoPedidoRoutes.get('/', estadoPedidoController.principal );
estadoPedidoRoutes.get('/buscar', estadoPedidoController.buscar );

estadoPedidoRoutes.post('/nuevo',  estadoPedidoController.nuevo );
estadoPedidoRoutes.put('/editar',  estadoPedidoController.editar );
estadoPedidoRoutes.delete('/eliminar',  estadoPedidoController.eliminar );

module.exports = estadoPedidoRoutes;