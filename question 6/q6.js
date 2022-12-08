"use strict";

(async()=>{
    const response = await fetch("http://api.weatherstack.com/current?access_key=b9f6eaaa2d1ef000b019363562f02bb0&query=Jerusalem")
    console.log(response)
    const weather = await response.json();
    console.log(weather)
    
})()