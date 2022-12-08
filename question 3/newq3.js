"use strict";
//Prototype script for q3.js
(async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
     namesForSelectInput(users)
     getUser()

     let mySelect = document.getElementById("select")
     mySelect.addEventListener("change",getUser)

})()

//Inserting user name as value for every option is select input
function namesForSelectInput(users) {
    let mySelect = document.getElementById("select")
    for (let user of users) {
        
        mySelect.innerHTML +=  `<option value="${user.id}">${user.name}</option>`
        
       
    }
    
}

async function getUser() {
    let selection = document.getElementById(`select`).value;
    //let selectionNum =  parseInt(selection)
    
    //console.log(typeof selectionNum)
    const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${selection}`);
    console.log(responseUser);
    let user = await responseUser.json();
    console.log(user);
     print(user)
    
}

 function print(user) {
    const myDiv = document.getElementById("myDiv")
    myDiv.innerHTML = `<ul>
      <li>${user.name}</li>
      <li>${user.username}</li>
      <li>${user.email}</li>
      <li>${user.phone}</li>
      <li>${user.address.city}</li>
      <li>${user.address.street}</li>
      <li>${user.address.zipcode}</li>
      <li>${user.company.name}</li>
</ul>`

}