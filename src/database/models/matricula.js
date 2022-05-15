'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{
        foreignKey: 'estudante_id'
      });
      this.belongsTo(models.Turma,{
        foreignKey: 'docente_id'
      });
    }
  }
  Matricula.init({
    status: DataTypes.STRING,
    estudante_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matricula',
  });
  return Matricula;
};