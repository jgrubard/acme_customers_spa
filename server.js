const express = require('express');
const app = express();
const path = require('path');

const { sync, seed, Customer } = require('./db/index.js');

app.use(express.static(path.join(__dirname, './client')))

app.use(require('body-parser').json());

app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

app.get('/api/customers', (req, res, next) => {
  Customer.findAll()
    .then( (customers) => {
      res.json(customers);
    })
    .catch(next);
});

app.post('/api/customers', (req, res, next) => {
  Customer.create(req.body)
    .then( (customer) => {
      res.json(customer);
    })
    .catch(next);
});

app.delete('/api/customers/:id', (req, res, next) => {
  Customer.findById(req.params.id)
    .then((customer) => {
      customer.destroy()
    })
    .catch((err) => {
      console.error(err);
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`** Listening on Port ${port} **`)
});

sync()
  .then(() => {
    seed();
  });
