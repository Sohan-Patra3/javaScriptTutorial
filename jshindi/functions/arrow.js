const user = {
    name : 'sohan',
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.name} , welcome to website`);
    }
}
//welcomeMessage()
user.welcomeMessage()
user.name = 'sam'
user.welcomeMessage()

const chai = function(){
    let username = 'sohan'
    console.log(this.username);
}

//chai()

/*const chai = () =>{
    let username = 'sohan'
    console.log(this.username);
}*/

chai()

const addtwo = (num1 , num2) =>{
    return num1+num2
}

console.log(addtwo(3,4));

const addthree = (num1 , num2 , num3) => num1 + num2 + num3

console.log(addthree(1,2,3));