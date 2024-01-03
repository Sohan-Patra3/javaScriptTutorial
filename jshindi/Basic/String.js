const name = 'sohan'
const repoCount = 50;

console.log(`my name ${name} and my repocount is ${repoCount}`);

const gameName = new String('sohan-sp-game')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newName = gameName.substring(0,3)
const newName1 = gameName.slice(0,3);

console.log(newName);
console.log(newName1);

const companyName = '  wet  '
console.log(companyName);
console.log(companyName.trim());
console.log(companyName.trimEnd());
console.log(companyName.trimStart());

const url = 'http://sohan.com/sohan%20patra'

console.log(url.replace('%20' , '-'));

console.log(url.includes('sohan'));
console.log(url.includes('das'));

console.log(gameName.split('-'));