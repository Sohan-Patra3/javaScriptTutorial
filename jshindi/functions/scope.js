const b=300;
let a = 200
var c = 100


if(true){
    let a= 30;
    const b = 20;
    var c = 10;
}
console.log(a);
console.log(b);
console.log(c);

function one(){
    name = 'sohan';
    function two(){
        website = 'youtube'
        console.log(name);
    }
   // console.log(website);
    two()
}
one()

if(true){
    const username = 'hitesh'
    if(username==='hitesh'){
        const website = 'youtube'
        console.log(username + website);
    }
}

addone(5);
console.log(addone(5));
function addone(num){
    return num+1
}

//addtwo()
const addtwo = function(num){
    return num+2
}

console.log(addtwo(5));
