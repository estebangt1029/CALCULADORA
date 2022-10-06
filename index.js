const display=document.querySelector('.display')
const valor=document.querySelectorAll('.valor')
const operador=document.querySelector('.operador')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multi = document.getElementById('multi')
const division = document.getElementById('division')
const igual = document.getElementById('igual')
const ac = document.getElementById('ac')

function presion(e){
    display.innerText=display.value
}
igual.addEventListener('click',()=>{
    if(valor[0].value === '' ||valor[1].value === ''){
        display.innerText='Error'
    } else{

    switch(operador.innerText){
        case '+':display.innerText= parseInt(valor[0].value) + parseInt(valor[1].value)
        break;
        case '-':display.innerText= parseInt(valor[0].value) -parseInt(valor[1].value)
        break;
        case '*':display.innerText= parseInt(valor[0].value) *parseInt(valor[1].value)
        break;
        case '/':display.innerText= parseInt(valor[0].value) /parseInt(valor[1].value)
             break;
        default: 'Error'
        break;
        
    }
    }

})

suma.addEventListener('click',()=>{
    operador.innerText='+'
})

resta.addEventListener('click',()=>{
    operador.innerText='-'
})

multi.addEventListener('click',()=>{
    operador.innerText='*'
})

division.addEventListener('click',()=>{
    operador.innerText='/'
})

ac.addEventListener('click',()=>{
    valor[0].value=''
    valor[1].value=''
    operador.innerText=''
    display.innerText='0'
})