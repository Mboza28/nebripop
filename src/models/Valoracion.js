const { DataTypes } = require('sequelize');
const sequelize = require('../bbdd/conect');


const Valoracion = sequelize.define('Valoracion', {
    valoracion_id:{
        type:DataTypes.UUID,
        defaultValues: DataTypes.UUIDV4,
        primaryKey: true
    },
    transaccion_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    evaluado_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    evaluador_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    comentario:{
        Type: DataTypes.String(250),
        allowNull: true
    },
    puntuacion:{
        type: DataTypes.Decimal(1,1),
        allowNull: false,
        validate:{
            min: 1,
            max: 5
        }

    }



})