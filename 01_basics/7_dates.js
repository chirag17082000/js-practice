//date object in javascript in mdn

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myNewCreatedDate = new Date(2023, 0, 23, 5, 3)

let myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);  //+1 because months in javascript starts with 0

// '${newDate.getDate()} and time is' 

newDate.toLocaleString('default', {
    weekday: "long"
})

