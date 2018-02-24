const { _conn, Sequelize } = require('./conn.js');

const Customer = _conn.define('customer', {
  email: {
    type: Sequelize.STRING,
    // unique: true,
    validate: {
      isEmail: true,
      // notNull: true,
      // notEmpty: true
    }
  }
}, {
  timestamps: false
});

module.exports = Customer;
