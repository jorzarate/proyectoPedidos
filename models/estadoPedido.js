const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const EstadoPedido = sequelize.define('EstadoPedido', {
    
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false  
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: false  
        }

    }, {});

    return EstadoPedido;
}

