const { Sequelize, Model } = require("sequelize");

module.exports = sequelize => {
  class Cookie extends Model {}

  Cookie.init(
    {
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      price: Sequelize.INTEGER
    },
    {
      sequelize,
      modelName: "Cookie"
    }
  );
  return Cookie;
};
