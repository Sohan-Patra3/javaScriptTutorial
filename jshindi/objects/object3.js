const course = {
    courseName : 'Js',
    courseInstructure : 'sohan',
    price : 999
}

const{courseInstructure} = course;
console.log(courseInstructure);

const{courseName: name} = course
console.log(name);

const {price : rate} = course
console.log(rate);

//Json

/*{
    "name": 'sohan',
    "cousename" : 'js'
    "price" : 999;
}*/