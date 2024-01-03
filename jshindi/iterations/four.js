const myObject={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

//console.log(myObject);

for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['js', 'rb','py','java','cpp']

for(const key in programming){
    console.log(programming[key]);
}
