const score = 100;
console.log(score.toFixed(2));

const no = Number(500);
console.log(no);

const balance = 100000;
console.log(balance.toString().length);

const otherNo = 123.8966;
console.log(otherNo.toPrecision(3));

const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));

//////////////////////////////////////////////////////

console.log(Math.abs(-5));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(3,6,23));
console.log(Math.min(9,6,3));

console.log(Math.random()); 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);