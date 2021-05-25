const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Producto = sequelize.define('Producto', {
    
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false  
        },
        precio: {
            type: DataTypes.DOUBLE(),
            allowNull: false  
        }

    }, {});

    return Producto;
}

