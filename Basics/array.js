let myArr = [0, 1, 2, 3, 4, 5];

// slice , splice

console.log("Array ", myArr);

// Slice Method 
// slice method does not modify the orignal array , it include only starting point 
const myn1 = myArr.slice(1, 3);
console.log("Slice Method", myn1);
console.log('Orignal Array :', myArr)

// Splice Method 
// splice method modify the orignal array it cut it out the array from given range
// It includes both starting and ending point
const myn2 = myArr.splice(1, 3);
console.log("Splice Method", myn2);
console.log("Orignal Array :", myArr);

const marval_heros = ['Iron Man', 'Hulk', 'Captain Amairica', 'Spiderman'];
const dc_heros = ['Batman', 'Superman', 'flash'];

// Merge two array

const all_new_heros = [...marval_heros, ...dc_heros];
console.log(all_new_heros)

// Complex situation in array
const another_array = [1, 2, 3, [4, 5, 6], 12, [5, 6, [7, 8]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// 
console.log(Array.isArray('string'));
// Convert to array 
console.log(Array.from('shubham'));
console.log(Array.from({ name: 'hitesh' }));

// Convert Multiple values into array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3))
let a = 3, b = 23
console.table([a, b])


