"use strict";


(async ()=>{
    const myBtn = document.getElementById("myBtn")
    myBtn.addEventListener('click',async () =>{
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        console.log(response);
        const users = await response.json();
        console.log(users);

        let idInput =  document.getElementById("idInput").value
        console.log(idInput)
        let myUser = {}
        
        for(let user of users){
           
            if(user.id == idInput){
             myUser = user;
             console.log(myUser)
               print(myUser)
            }
           
        }
       
        
    })
})()



function print(myUser){
    let myDiv= document.getElementById("info")
    myDiv.innerHTML = `<ul>
    <li>${myUser.name}</li>
    <li>${myUser.username}</li>
    <li>${myUser.email}</li>
    <li>${myUser.phone}</li>
    <li>${myUser.address.city}</li>
    <li>${myUser.address.street}</li>
    <li>${myUser.address.zipcode}</li>
    <li>${myUser.company.name}</li>
</ul>`
        
}