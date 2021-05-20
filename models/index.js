const dbConfig = require('../config/db.config');
//const dbConfig = require('../config/db_server.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.port
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
// MODELOS BASE
db.Usuario = require('./usuario')(sequelize,Sequelize);
db.Rol = require('./rol')(sequelize,Sequelize);

db.Pedido = require('./pedido')(sequelize,Sequelize);
db.DetallePedido = require('./detallePedido')(sequelize,Sequelize);
db.EstadoPedido = require('./estadoPedido')(sequelize,Sequelize);
db.Producto = require('./producto')(sequelize,Sequelize);

// RELACIONES
db.Rol.hasMany(db.Usuario);
db.Usuario.belongsTo(db.Rol);

db.Pedido.belongsTo(db.EstadoPedido); // Un Pedido tiene Un EstadoPedido
db.EstadoPedido.hasMany(db.Pedido); // Un estadoPedido tiene varios Pedidos

db.DetallePedido.belongsTo(db.Pedido);
db.Pedido.hasMany(db.DetallePedido);

db.DetallePedido.belongsTo(db.Producto);
db.Producto.hasMany(db.DetallePedido);

//belongsMany

// - - - - - - - 

module.exports = db;

