'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Turma,{
        foreignKey:'nivel_id'
      })
    }
  }
  Nivel.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivel',
    tableName: 'niveis',
  });
  return Nivel;
};