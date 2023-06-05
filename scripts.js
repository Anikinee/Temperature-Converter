let c_input = document.querySelector('#celcius > input')
let f_input = document.querySelector('#fahrenheit > input')
let k_input = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

// Conversion of celcius to fahrenheit and kelvin.
c_input.addEventListener('input',function(){
    let cTemp = parseFloat(c_input.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    f_input.value = roundNumber(fTemp);
    k_input.value = roundNumber(kTemp)
})

// Conversion of fahrenheit to celcius and kelvin.
f_input.addEventListener('input',function(){
    let fTemp = parseFloat(f_input.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    c_input.value = roundNumber(cTemp);
    k_input.value = roundNumber(kTemp)
})

// Conversion of kelvin to celcius and fahrenheit.
k_input.addEventListener('input',function(){
    let kTemp = parseFloat(k_input.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    c_input.value = roundNumber(cTemp);
    f_input.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=>{
    c_input.value = ""
    f_input.value = ""
    k_input.value = ""
})