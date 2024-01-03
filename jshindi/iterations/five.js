const coding = ['js', 'c++' , 'java' , 'python','swift']

coding.forEach(function(item){
    console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme)

coding.forEach((item , index , arr)=>{
    console.log(item , index , arr);
})

const myCoding = [
    {
        languageName : 'javascript',
        filename: 'js'
    },
    {
        languageName : 'python',
        filename: 'py'
    },
    {
        languageName : 'java',
        filename: '.java'
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.filename);
})