'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Matricula, {
        foreignKey:'turma_id'
      });
      this.belongsTo(models.User,{
        foreignKey: 'docente_id'
      });
      this.belongsTo(models.Nivel,{
        foreignKey:'nivel_id'
      });
    }
  }
  Turma.init({
    docente_id: DataTypes.INTEGER,
    data_inicio: DataTypes.DATEONLY,
    nivel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turma',
    tableName: 'turmas',
  });
  return Turma;
};