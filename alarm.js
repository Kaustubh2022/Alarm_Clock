

let time = document.getElementById("current-time");



setInterval(()=>{

    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
},1000);