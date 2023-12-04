
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate);
let secDate = new Date(2023,0,25,5,9);
console.log(secDate.toLocaleString());
let thirdDate = new Date("01-25-2023");
console.log(thirdDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// Convert Into Seconds
  
console.log(Math.floor(myTimeStamp/1000));

// Convert Into Minutes
console.log(Math.floor(myTimeStamp/(1000 * 60)));