const sequelize = require('../config/db');
const School = require('./school');

// Sync database schema
(async () => {
  await sequelize.sync({ alter: true });
  console.log('Database synchronized.');
})();

module.exports = {
  sequelize,
  School,
};
