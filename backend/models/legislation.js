'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Legislation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Legislation.init({
    law: DataTypes.INTEGER,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    votesFor: DataTypes.INTEGER,
    votesAgainst: DataTypes.INTEGER,
    votesSubstain: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Legislation',
  });
  return Legislation;
};