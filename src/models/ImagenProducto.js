const { DataTypes } = require('sequelize');
const sequelize = require('../bbdd/conect');




const ImagenProducto = sequelize.define('ImagenProducto', {
    imagen_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true

    },
    producto_id:{
        type: DataTypes.UUID,
        allowNull: false
    },
    url:{
        type: DataTypes.string(200),
        allowNull: false,
    },






})