const { DataTypes } = require('sequelize');
const sequelize = require('../bbdd/conect');


const Reembolso = sequelize.define('Reembolso', {
    reembolso_id:{
        type:DataTypes.UUID,
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
    estado:{
        type: DataTypes.Enum('Solicitado', 'Aprovado', 'Rechazado'),
        defaultValue: 'pendiente'
    },
    motivo:{
        type: DataTypes.String(200),
        allowNull: false
    },
    fecha:{
         type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }


})