'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Faction.init({
    name: DataTypes.STRING,
    party: DataTypes.INTEGER,
    knesset: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Faction',
  });
  return Faction;
};