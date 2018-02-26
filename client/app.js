const createCustomer = document.getElementById('createButton');
const ul = document.getElementById('customerList');

fetch('/api/customers')
  .then( (result) => {
    return result.json();
  })
  .then( (data) => {
    data.forEach((cust) => {
      addCustomer(cust);
    })
  })
  .catch( (err) => {
    console.error(err);
  });

createCustomer.addEventListener('click', () => {
  fetch('/api/customers', {
    method: 'POST',
    body: JSON.stringify({
      email: document.getElementById('email').value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .catch((err) => {
    console.error(err);
  })
})

function addCustomer(customer) {
  let li = document.createElement('li');
  let removeButton = document.createElement('button');
  li.append(customer.email);
  removeButton.append('Remove');
  li.append(removeButton);
  ul.append(li);
  removeButton.addEventListener('click', () => {
    deleteCustomer(customer, li);
  })
}

function deleteCustomer(customer, listItem) {
  listItem.remove();
  fetch(`/api/customers/${customer.id}`, {
    method: 'DELETE'
  })
  .catch((err) => {
    console.error(err);
  })
}
