let customers;

fetch('/api/customers')
  .then( (data) => {
    return data.json();
  })
  .then( (_customers) => {
    // console.log(customers)
    customers = _customers;

    // var postForm = document.getElementById('email').parentNode;
    // postForm.method = 'POST';

    addCustomers(customers);
  })
  .catch( (err) => {
    console.error(err);
  });

function addCustomers(cust) {
  cust.forEach((person) => {
    let li = document.createElement('li');
    let remButton = document.createElement('button');
    li.append(person.email);
    remButton.append('Remove');
    li.append(remButton);
    document.getElementById('customerList').append(li);
  })
}

document.getElementById('createButton').addEventListener('click', () => {
  fetch('/api/customers', {
    method: 'POST',
    body: JSON.stringify({ test: 'test'
      // id: document.getElementById('email')
      // itinerary data
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then((data) => {
    data.json();
  })
  .then((customer) => {
    console.log(customer);
  })
  .catch((err) => {
    console.error(err);
  })
})

