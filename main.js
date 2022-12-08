"use strict";

(async () => {  
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response)
    const users = await response.json()
    console.log(users)
    printToTable(users)
})()


function printToTable(users){
    const table = document.getElementById("myTable")
    let html = '';
    for(let user of users){
        html += `<tr><td>${user.name}</td>
                 <td>${user.username}</td>
                 <td>${user.email}</td>
                 <td>${user.phone}</td>
                 <td>${user.address.city}</td>
                 <td>${user.address.street}</td>
                 <td>${user.address.zipcode}</td>
                <td>${user.company.name}</td></tr>`
        
    }
    table.innerHTML +=html
}