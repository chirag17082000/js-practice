
//function definition
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
}

//here sayMyName is refrence of this function 
//() is execution of this function
// sayMyName()

// function addTwoNumbers(number1, number2){ //here number1 and number2 are parameters

//     console.log(number1 + number2); //here number1 and number2 are arguments
// }
// addTwoNumbers(2,5);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "A");
// addTwoNumbers(3, null);

function addTwoNumbers(number1, number2){ //here number1 and number2 are parameters

    let result = number1 + number2
    return result;
    //return number1 + number2;
}
// const result = addTwoNumbers(8,5);
// console.log("Result", result);

function loginUserMessage(username){ // default value bhi de sakte hai username = "sam"

    // if(username === "undefined"){
    //     console.log("Please enter a username")
    // }
    if(!username){ // use to check username is undefined
        return
    }
    return `${username} just logged in` //string interpolation
}

// console.log(loginUserMessage("Chirag Kaushik"));
// console.log(loginUserMessage());


