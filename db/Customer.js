const { _conn, Sequelize } = require('./conn.js');

const Customer = _conn.define('customer', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
}, {
  timestamps: false
});

module.exports = Customer;
