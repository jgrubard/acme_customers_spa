var customers;


fetch('/api/customers')
  .then( (data) => {
    return data.json();
  })
  .then( (_customers) => {
    // console.log(_customers)
    customers = _customers;
    addCustomers(customers);


  })
  .catch( (err) => {
    console.error(err);
  });

console.log(customers)

function addCustomers(cust) {
  cust.forEach((person) => {
    let li = document.createElement('li');
    let remButton = document.createElement('button');
    li.append(person.email);
    remButton.append('Remove');
    remButton.className = 'rem-button'
    li.append(remButton);
    document.getElementById('customerList').append(li);
  })

}

document.getElementById('createButton').addEventListener('click', () => {
  fetch('/api/customers', {
    method: 'POST',
    body: JSON.stringify({
      email: document.getElementById('email').value
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  // .then((data) => {
  //   return data.json();
  // })
  .catch((err) => {
    console.error(err);
  })
})

// document.getElementById('rem-button').addEventListener('click', () => {
//   fetch('/api/customers/')
// })



