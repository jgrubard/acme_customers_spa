const { _conn, Sequelize } = require('./conn.js');

const Customer = _conn.define('customer', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
}, {
  timestamps: false
});

module.exports = Customer;
