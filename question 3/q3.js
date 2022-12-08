"use strict";

(async () => {
    let mySelect = document.getElementById("select")
    mySelect.addEventListener("change", getUser)
    //Get all users from server
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //Getting users response from server
    const users = await response.json(); //Converting the response to array of users
    namesForSelectInput(users)
    getUser() //Getting individual user object from the server and printing it on the screen

   

})()

//Inserting user name as value for every option is select input
function namesForSelectInput(users) {
    let mySelect = document.getElementById("select")
    for (let user of users) {
        mySelect.innerHTML += `<option value="${user.id}">${user.name}</option>`


    }

}

async function getUser() {
    let selection = document.getElementById(`select`); //getting the select box element
    let selectionNum = parseInt(selection.value) //Changing it from a string to a number type
    const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${selectionNum}`); //Asking response user from the server
    console.log(responseUser);
    let user = await responseUser.json(); // coverting the resposne into an object
    console.log(user);
    print(user)//Printing the current user on the screen
}

function print(user) {
    const myDiv = document.getElementById("myDiv"); //Getting the div element for manipulating the DOM with unOrdered list
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










