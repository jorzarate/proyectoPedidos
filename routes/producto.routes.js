const express = require('express');
const productoRoutes = express.Router();

const productoController = require('../controllers/producto.controller');

productoRoutes.get('/', productoController.principal );
productoRoutes.get('/buscar', productoController.buscar );

productoRoutes.post('/nuevo',  productoController.nuevo );
productoRoutes.put('/editar',  productoController.editar );
productoRoutes.delete('/eliminar',  productoController.eliminar );

module.exports = productoRoutes;