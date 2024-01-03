const tinderUser = {}

tinderUser.name='sohan'
tinderUser.id = 12345
tinderUser.loggedIn = false;

//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//This will return the object keys as a array form

const regularUser = {
    email : 'sohan@wet.com',
    fullname : {
        userfullname :{
            firstname : 'Sohan',
            lastname : 'Patra'
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

const obj3 = {obj1 , obj2}
const obj4 = Object.assign(obj1 ,obj2)
const obj5 = Object.assign({} , obj1 , obj2)
const obj6 = {...obj1 , ...obj2}

console.log(obj1);
console.log(obj1===obj4);
console.log(obj3);
console.log(obj5);
console.log(obj6);

const users= [{
    name :'milan',
    email:'milan@google.com'
},
{
    name:'sohan',
    email:'sohan@mmm.com'
}]

const userdata = users[0].name
console.log(userdata);
console.log(users[1].name);

