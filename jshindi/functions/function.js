function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500));

const user = {
    name:'sohan',
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user)

const myNewArr = [100,200,400,200]

function getArray(myArr){
    return myArr[1]
}
console.log(getArray(myNewArr));