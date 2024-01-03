const mySym = Symbol('myname')

const jsuser = {
    name : 'sohan',
    age : 23,
    [mySym] : Symbol('myKey1'),
    location : 'bbsr',
    email : 'sohan@google.com',
    isloggedin : false,
    lastLogginDays : ['monday', 'saturday']
}
/*console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mySym]);
console.log(typeof jsuser[mySym]);

jsuser.email='sohan@chatgpt.com'
Object.freeze(jsuser)
jsuser.email= 'sohan@microsoft.com'

console.log(jsuser);*/

jsuser.greeting = function(){
    console.log('hello js user');
}
jsuser.greetingTwo = function(){
    console.log(`Hello js User ${this.name}`);
}
console.log(jsuser);
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());