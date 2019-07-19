const button1 = document.getElementById('button1'),
      button2 = document.getElementById('button2'),
      customer = document.getElementById('customer'),
      customers = document.getElementById('customers');

  
button1.addEventListener('click',addOneCust);
button2.addEventListener('click',addAllCust);


function addOneCust(){
  
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true)

  xhr.onload = function(){
    if(this.status === 200){
    const cust = JSON.parse(this.responseText);

      customer.innerHTML = `
      <ul>
        <li> ID : ${cust.id}</li>  
        <li> Name : ${cust.name}</li>  
        <li> Company : ${cust.company}</li>  
        <li> Phone : ${cust.phone}</li>  
      </ul>`
  }
}

  xhr.send();
}
function addAllCust(){

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){

    if(this.status === 200){
      
      const cust = JSON.parse(this.responseText);
      let output =''
      cust.forEach(item => {
        output += `
          <ul>
            <li> ID : ${item.id}</li>  
            <li> Name : ${item.name}</li>  
            <li> Company : ${item.company}</li>  
            <li> Phone : ${item.phone}</li>  
          </ul>`
      });
      
      customers.innerHTML = output
    }
  }
  xhr.send();

}