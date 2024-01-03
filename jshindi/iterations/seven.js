const myNumbers = [1,2,3,4,5,6,7,8,9,10]

/*for(let i = 0 ; i<10 ; i++){
    const value = myNumbers[i]+1
    console.log(value);
}*/

const nums = myNumbers.map((num)=> num+10)
console.log(nums);

const newNums = myNumbers.map((num)=> num*10)
                         .map((num)=> num+1)
                         .filter((num)=> num>40)

console.log(newNums);