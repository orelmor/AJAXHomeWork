"use strict";
(()=>{
    let btn = document.getElementById("myBtn")
    btn.addEventListener("click",async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        console.log(response)
        const photos = await response.json()
        console.log(photos)
        printToTable(photos)

    })
})()



function printToTable(photos){
    const table = document.getElementById("table")
    for(let i=0; i<100; i++){
        table.innerHTML += `<tr>
            <td>${photos[i].albumId}</td>
            <td>${photos[i].id}</td>
            <td>${photos[i].title}</td>
            <td><img src="${photos[i].thumbnailUrl}"/></td>
        </tr>`
    }

}