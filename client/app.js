var customers;

fetch('/api/customers')
  .then( (data) => {
    return data.json();
  })
  .then( (_customers) => {
    // console.log(customers)
    customers = _customers;
    addCustomers(customers);
  })
  .catch( (err) => {
    console.error(err);
  });


function addCustomers(cust) {
  cust.forEach((person) => {
    let li = document.createElement('li');
    let ul = document.getElementById('customerList');
    li.append(person.email);
    ul.append(li);
  })
}

// console.log(customers);

