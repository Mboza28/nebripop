const { DataTypes } = require('sequelize');
const sequelize = require('../bbdd/conect');


const Factura = sequelize.define('Factura', {
    factura_id:{
        type: DataTypes.UUID,
        defaultValues: DataTypes.UUIDV4,
        primaryKey: true

    },
    transaccion_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    importe:{
        type: DataTipes.Decimal(5,2),
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }




})