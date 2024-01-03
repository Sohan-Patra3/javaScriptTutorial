const button = document.querySelectorAll('.button')
console.log(button);
const body = document.querySelector('body')

button.forEach((bt)=>{
    console.log(bt);
    bt.addEventListener('click' , (e)=>{
        console.log(e.target);
        if(e.target.id==='grey'){
            document.body.style.backgroundColor= e.target.id
        }
        else if(e.target.id==='yellow'){
            document.body.style.backgroundColor= e.target.id
        }
        else if(e.target.id==='green'){
            document.body.style.backgroundColor= e.target.id
        }
        else if(e.target.id==='blue'){
            document.body.style.backgroundColor= e.target.id
        }
    })
})