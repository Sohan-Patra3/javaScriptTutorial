const clock = document.getElementById('clock')

/*setInterval((e)=>{
    let date = new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)*/

function time(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}

setInterval(time , 1000)