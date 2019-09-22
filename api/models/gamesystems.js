'use strict';
module.exports = (sequelize, DataTypes) => {
  const gamesystems = sequelize.define('gamesystems', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  gamesystems.associate = function(models) {
    // associations can be defined here
  };
  return gamesystems;
};