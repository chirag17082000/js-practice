const marvel_heros = ["thor", "ironman", "spidermasn"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
//spread operator -> mainly prefer to use spread operatpr instead of concat operator 
//Because concat has limation that we can use ony one array
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8,9,10, [11, 12]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Chirag"));
// console.log(Array.from("Chirag"));
// console.log(Array.from({name: "Chirag"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));