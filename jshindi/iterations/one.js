/*for(let i =0 ; i<=10 ;i++){
    console.log(i);
}*/

/*for(let i =0 ;i<=10 ; i++){
    console.log(`Outer loop value : ${i}`);
    for(let j =0 ; j<=10;j++){
       // console.log(`Inner loop value ${j} and outer loop ${i}`);
       console.log(`${i} * ${j} = ${i*j}`);
    }
}*/

let myArr = ['superman' , 'spiderman' , 'ironman']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

//break and continue

for(let i =0 ; i<=20 ; i++){
    if(i==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);
}
for(let i =0 ; i<=20 ; i++){
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}