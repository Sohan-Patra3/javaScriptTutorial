// primitive

//7 type : String , Number , Boolean , Null , Undefined , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLogged = true
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 74874839768756546n;
console.log(typeof (bigNumber));

//Reference(Non primitive)

const heros = ['shaktiman' , 'nagraj' , 'doga'];

let myObj = {
    name : 'sohan',
    age : 23,
} 

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof (myFunction));
console.log(typeof (myObj));
console.log(typeof (heros));

// stack (primitive) , Heap (non-primitive)

let myName = 'sohan patra'

let myAnotherName = 'Milan'

myAnotherName = myName;

console.log(myName);
console.log(myAnotherName);

let userOne ={
    email: 'user@gmail.com',
    upi : 'user@ybl'
}

let userTwo = userOne;

userTwo.email='sohan@gmail.com'
console.log(userTwo.email);
console.log(userOne.email);