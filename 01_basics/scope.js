// var c = 300
// let a = 300

//  if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner", a);
    
//  }

// console.log(a);
// //console.log(b);
// console.log(c); 

function one(){
    const username = "chirag"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two();
}

one();

if(true){
    const username = "chirag"

    if(username === "chirag"){
        const website = " youtube";
        //console.log(username + website);
    }
    //console.log(website);
}
// console.log(username);

console.log(addone(5)); //js me function ko declaration se pehle use kar skate hai 
function addone(num){

    return num + 1
}
// addone(5);

addTwo(5); //is type ke function ko nhi kar paate
const addTwo = function(num){ // ye bhi function jaisa hi hai kayi baar ise expression boldte hai
    return num +2;
}

// addTwo(5);