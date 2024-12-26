const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //always ye syntax follow karna hai -> First paremter function and uski body then second 1000

