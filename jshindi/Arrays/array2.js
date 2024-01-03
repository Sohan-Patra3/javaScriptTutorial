const marvel_heros = ['thor' , 'captainAmerica' , 'ironman']
const dc_heros= ['superman', 'flash' , 'batman']

//marvel_heros.push(dc_heros)
console.log(marvel_heros);
//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log (all_new_heros);
//console.log(all_new_heros.flat(1));

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(1);
const real_another_array2 = another_array.flat(2);
const real_another_array3 = another_array.flat(Infinity)
console.log(real_another_array);
console.log(real_another_array2);
console.log(real_another_array3);

console.log(Array.isArray("sohan"));
console.log(Array.from("sohan"));
console.log(Array.from('milan'));
//from method is use only for Strings

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1 , score2 , score3));
//console.log(Array.from(score1 , score2 , score3));
//of method only use in integers