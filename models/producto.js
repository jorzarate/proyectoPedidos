const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Producto = sequelize.define('Producto', {
    
        idProducto: {
            type: DataTypes.INTEGER(), 
            allowNull: false,
            unique: true  
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false  
        },
        precio: {
            type: DataTypes.DOUBLE(),
            allowNull: false  
        },
        idDetalleProducto: {
            type: DataTypes.INTEGER(),
            allowNull: false  
        }

    }, {});

    return Producto;
}

