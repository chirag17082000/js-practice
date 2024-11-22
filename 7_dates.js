//date object in javascript in mdn

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myNewCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myNewCreatedDate.toLocaleDateString());

