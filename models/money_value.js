'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class money_value extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  money_value.init({
    treasure_id: DataTypes.INTEGER,
    amt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'money_value',
  });
  return money_value;
};