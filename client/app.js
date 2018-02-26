const createCustomer = document.getElementById('createButton');
const ul = document.getElementById('customerList');
ul.className = 'list-group';
let message = document.getElementById('message');
let body = document.getElementsByTagName('body');
body[0].className = 'container';
let createButton = document.getElementById('createButton');
createButton.className = 'btn btn-primary';
createButton.style.margin = '10px 0 0 0';
let emailInput = document.getElementById('email');
emailInput.className = 'form-control';
emailInput.placeholder = 'Enter a valid email address'

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
    message.innerText(err);
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
  // .then(handleErrors)
  // .then((response) => {
  //   console.log('ok')
  // })
  .catch((err) => {
    // message.innerText(err);
    message.innerText('Text');
    console.log(message + err);
    // console.error(err);
  })
})

function addCustomer(customer) {
  let li = document.createElement('li');
  let removeButton = document.createElement('button');
  li.className = 'list-group-item'
  li.append(customer.email);
  removeButton.append('Remove');
  removeButton.className = 'btn btn-danger';
  removeButton.style.margin = '0 0 0 10px';
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
    message.innerText(err);
  })
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
