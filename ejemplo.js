CODIGO BASE CALCULADORA:
 
const display=document.querySelector('.display')
const valor=document.querySelectorAll('.valor')
const operador=document.querySelector('.operador')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multi = document.getElementById('multi')
const division = document.getElementById('division')
const igual = document.getElementById('igual')
const ac = document.getElementById('ac')
for(let i=0; i<=9;i++){
    document.getElementById('num'+i).addEventListener('click',presion)
}

function presion(e){
    display.innerText=display.innerText+e.target.value
}
igual.addEventListener('click',()=>{
    if(valor[0].value === '' ||valor[1].value === ''){
        display.innerText='Error'
    } else{

    switch(operador.innerText){
        case '+':display.innerText= parseInt(valor[1].value) + parseInt(valor[0].value)
        break;
        case '-':display.innerText= parseInt(valor[1].value) -parseInt(valor[0].value)
        break;
        case '*':display.innerText= parseInt(valor[1].value) *parseInt(valor[0].value)
        break;
        case '/':display.innerText= parseInt(valor[1].value) /parseInt(valor[0].value)
             break;
        default: 'Error'
        break;
        
    }
    }

})

suma.addEventListener('click',()=>{
    operador.innerText='+'
    valor[1].value=valor[0].value
    valor[0].value=''

})

resta.addEventListener('click',()=>{
    operador.innerText='-'
    valor[1].value=valor[0].value
    valor[0].value=''
})

multi.addEventListener('click',()=>{
    operador.innerText='*'
    valor[1].value=valor[0].value
    valor[0].value=''
})

division.addEventListener('click',()=>{
    operador.innerText='/'
    valor[1].value=valor[0].value
    valor[0].value=''
})

ac.addEventListener('click',()=>{
    valor[0].value=''
    valor[1].value=''
    operador.innerText=''
    display.innerText='0'
})
