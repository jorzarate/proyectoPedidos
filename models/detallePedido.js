const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const DetallePedido = sequelize.define('DetallePedido', {
    
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false  
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: false  
        }

    }, {});

    return DetallePedido;
}

