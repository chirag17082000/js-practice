//array

const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

const myHeros = ["nagraj", "batman"];
const myArr2 = new Array(1,2,3,4);

//Array methods

// myArr.push(6); // Add value at end of array
// console.log(myArr);
// myArr.push(7); 
// console.log(myArr);
// myArr.pop(); //Remove a value from end of array
// console.log(myArr)

// myArr.unshift(9); //Add a value at starting of array -> shift all the value of array by one index
// myArr.shift(); //Remove value from starting of array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(typeof myArr); // ye object data type hi hai
// console.log(typeof newArr); // ye string ban gyi and array ko bind kardiya

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log("B", myn1);


const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C", myArr);
