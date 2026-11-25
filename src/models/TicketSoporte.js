const { DataTypes } = require('sequelize');
const sequelize = require('../bbdd/conect');


const TicketSoporte = sequelize.define('TicketSoporte', {
    TicketSoporte_id:{
        type:DataTypes.UUID,
        defaultValues: DataTypes.UUIDV4,
        primaryKey: true
    },
    transaccion_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    usuario_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    usuario_administrador_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})