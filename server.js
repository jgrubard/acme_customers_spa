const express = require('express');
const app = express();
const path = require('path');

const { sync, seed, Customer } = require('./db/index.js');



app.use(express.static(path.join(__dirname, './client')))

app.use(require('body-parser').json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/customers', (req, res, next) => {
  Customer.findAll()
    .then( (customers) => {
      res.json(customers);
    })
    .catch(next);
});

app.post('/api/customers', (req, res, next) => {
  // console.log(req.body)
  Customer.create(req.body)
    .then( (customer) => {
      console.log(customer);
      res.json(customer);
    })
    .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`** Listening on Port ${port} **`)
});

sync()
  .then(() => {
    seed();
  });

module.exports = app;
