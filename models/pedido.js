const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Pedido = sequelize.define('Pedido', {
    
        numero: {
            type: DataTypes.STRING(),
            allowNull: false  
        },
        fechaCreacion: {
            type: DataTypes.DATE(),
            allowNull: false  
        }

    }, {});

    return Pedido;
}