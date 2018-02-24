const { _conn } = require('./conn');
const Customer = require('./Customer.js')

const sync = () => {
  return _conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Customer.create({ email: 'jeremy@gmail.com' }),
    Customer.create({ email: 'supattra@gmail.com' })
  ])
}

module.exports = {
  sync,
  seed,
  Customer
}
