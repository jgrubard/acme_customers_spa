let customers;

fetch('/api/customers')
  .then( (data) => {
    return data.json();
  })
  .then( (_customers) => {
    // console.log(customers)
    customers = _customers;

    var postForm = document.getElementById('email').parentNode;
    postForm.method = 'POST';

    addCustomers(customers);
  })
  .catch( (err) => {
    console.error(err);
  });

function addCustomers(cust) {
  cust.forEach((person) => {
    let li = document.createElement('li');
    li.append(person.email);
    document.getElementById('customerList').append(li);
  })
}
