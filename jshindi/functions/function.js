//rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(20));

function calculate(val1 , val2 , ...num1){
    return num1
}

console.log(calculate(12,23,300,400));


const user = {
    name : "sohan",
    age : 24
}

function name(user){
    console.log(`User name is ${user.name} and age is ${user.age}`);
}

name(user);

const myArr = [100,200,300]

function Array(arr){
    return arr[1]
}

console.log(Array(myArr));

function addTwoNumber(num1 , num2){
    return num1+num2;
}

console.log(addTwoNumber(2,3));

const a = addTwoNumber(2,3);
console.log(a);

function userName(username){
    if(username===undefined){
        console.log("please enter your name");
        return
    }
    return `${username} just loggedin`
}

console.log(userName());
console.log(userName("sohan"));


