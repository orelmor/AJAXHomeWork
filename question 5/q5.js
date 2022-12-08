"use strict";

(async ()=>{
    const response = await fetch("https://reqres.in/api/users")
    console.log(response)
    const users = await response.json()
    console.log(users)
    const usersArray = users.data
    console.log(usersArray)
    printToTable(usersArray) 

})()

function printToTable(users){
    const table = document.getElementById("myTable")
    for(let user of users){
        table.innerHTML +=`<tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}" /></td>
        </tr>`
    }
}

