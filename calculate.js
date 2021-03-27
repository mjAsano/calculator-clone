const display1El = document.querySelector('.display-1')
const display2El = document.querySelector('.display-2')
const tempResultEl = document.querySelector('.temp-result')
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelectorAll('.equal');
const clearEl = document.querySelectorAll('.all-clear');
const clearLastEl = document.querySelectorAll('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = 0.0;
let lastOperation = '';
let isNew = true;
let haveDot = false;
const arrNum = [];
const arrOpe = []

clearEl.forEach( clear =>  {
    clear.addEventListener('click', (e) => {
        dis1Num = ''
        dis2Num = ''
        display2El.innerText = '0';
        display1El.innerText = '0';
        haveDot = false;
        arrNum.length = 0;
        arrOpe.length = 0; 
        result = 0;
    })
})
clearLastEl.forEach( clearLast =>  {
    clearLast.addEventListener('click', (e) => {
        if(dis2Num.length == 1) {
            dis2Num = dis2Num.substring(0, dis2Num.length -1)
            display2El.innerText = '0'
        }else if(dis2Num.length == 0){
            return;
        }else if(dis2Num.slice(-1) == '.'){
            dis2Num = dis2Num.substring(0, dis2Num.length -1)
            display2El.innerText = dis2Num;  
            haveDot = false;        
        
        }else {
            dis2Num = dis2Num.substring(0, dis2Num.length -1)
            display2El.innerText = dis2Num;
        }
    })
})
numbersEl.forEach( number => {
    number.addEventListener('click', (e) => {
        if(isNew == false){
            isNew = true;
            dis1Num = ''
            dis2Num = ''
            display2El.innerText = '0';
            display1El.innerText = '0';
            haveDot = false;
            arrNum.length = 0;
            arrOpe.length = 0; 
            result = 0;
        }
       if (e.target.innerText == '.' && !haveDot) {
        haveDot = true; 
        }else if(e.target.innerText == '.' && haveDot ) {
        return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
})
operationEl.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if(dis2Num == "") {
            return;
        }
        haveDot = false;
        arrNum.push(dis2Num)
        arrOpe.push(e.target.innerText)
        dis1Num = dis2Num
        display1El.innerText += dis1Num + e.target.innerText;
        dis2Num = ''    
        display2El.innerText = '0'    
    })
})
equalEl.forEach( equal => {
    equal.addEventListener('click', (e) => {
        arrNum.push(dis2Num)
        haveDot = false;
        dis1Num = dis2Num
        display1El.innerText += dis1Num;
        dis2Num = ''    
        display2El.innerText = '0'
        
        arrNum.forEach(function(item, index, arr) {
            if(index == 0){
                result = parseFloat(item)
            }
            else if(index > 0){
                switch(arrOpe[index - 1])
                { 
                    case '+':
                        result = parseFloat(result) + parseFloat(item)
                        break;
                    case '-':
                        result = parseFloat(result) - parseFloat(item)
                        break;
                    case 'X':
                        result = parseFloat(result) * parseFloat(item)
                        break;
                    case '/':
                        result = parseFloat(result) / parseFloat(item)
                        break;
                }        
            }      
        })
        display2El.innerText = result;
        isNew = false;
    })
})

