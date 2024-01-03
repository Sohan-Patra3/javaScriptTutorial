const arr = [0,1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greeting = 'hello world'

for(const greet of greeting){
    console.log(greet);
}

const map = new Map()

map.set('IN', 'india')
map.set('USA' , 'United states of America')
map.set('FR','France')

console.log(map);


for(const [key , value] of map){
    console.log(key , '-' , value);
}