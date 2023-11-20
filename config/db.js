const dbConfig = require("./dbConfig");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to Datbase`);
  })
  .catch(() => console.log(`Error Connecting to Database`));

sequelize.sync({ force: false }).then(() => console.log(`Database Synced`));

module.exports = sequelize;
