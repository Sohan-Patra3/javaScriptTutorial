let myDate =  new Date();
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let myCretedDate = new Date(2013 , 0 , 23);
console.log(myCretedDate.toLocaleString());
let myCretedDate2 = new Date (2023 , 0 , 23 , 5 , 3);
console.log(myCretedDate2.toLocaleString());
let myCretedDate3 = new Date("2023-01-15");
console.log(myCretedDate3.toLocaleString());
let myCretedDate4 = new Date("01-12-2023")
console.log(myCretedDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCretedDate4.getDate());
console.log(myCretedDate4.getTime());