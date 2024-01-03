const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.getElementById('result')
    const res = document.getElementById('res')

    if(height<0 || height==='' || isNaN(height)){
        result.innerHTML=`Please enter the valid height`
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        result.innerHTML=`Please enter the valid weight`
    }
    else{
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
    }

    let bmi = (weight / ((height*height)/10000)).toFixed(2)

    if(bmi<18.6){
        res.outerHTML=`<span>Under weight</span>`
    }
    else if(bmi>18.6 && bmi<24.9){
        res.innerHTML=`<span>Normal weight</span>`
    }
    else if(bmi>24.9){
        res.innerHTML=`<span>Over weight</span>`
    }
})