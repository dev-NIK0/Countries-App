const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(3),
      defaultValue: DataTypes.STRING,
  },
  name: {
    allowNull: false, 
    type: DataTypes.STRING,
  },
  flag: {
      allowNull: false,
      type:  DataTypes.TEXT,
      defaultValue: DataTypes.TEXT
  },
  continent: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: DataTypes.STRING
  },
  capital: {
      allowNull: false,
      type: DataTypes.STRING, //Array
  },
  subregion: {
   type: DataTypes.STRING
  },
  area: {
      type: DataTypes.INTEGER
  },
  population: {
      type: DataTypes.INTEGER
  },
  });
};
