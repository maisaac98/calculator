function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return "DIVIDE BY 0 ERROR";
    }
    return a / b;
}

function operate(a, b, c){
    if(b === ''){
        return;
    }
    switch(c){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if(b === 0){
                return "DIVIDE BY 0 ERROR"
            }
            return divide(a, b);
    }
}

var displayValue = '';
var operator = '';
var firstNum = '';
var secNum = '';
var operatorPressed = false;

//add keyboard support

function updateDisplay(){
    const display = document.querySelector("#display");
    if(displayValue.length > 7){
        displayValue = displayValue.substring(0,8);
    }
    display.textContent = displayValue;
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
    firstNum, operator = '';
}


document.querySelectorAll('.digit').forEach(number => {
    number.addEventListener('click', event =>{
        let value = number.textContent;
        displayValue = displayValue.concat(value);
        updateDisplay();
    })
})

document.querySelector('.decimal').addEventListener('click', function(){
    if(!displayValue.includes('.')){
        displayValue = displayValue.concat('.');
        updateDisplay();
    }
})

document.querySelector('.backspace').addEventListener('click', function(){
    displayValue = displayValue.substring(0,displayValue.length-1);
    updateDisplay();
})

document.querySelectorAll('.operator').forEach(sign =>{
    sign.addEventListener('click',event=>{
        if(operator != ''){
            displayValue = operate(firstNum, parseFloat(displayValue), operator);
            updateDisplay();
        }
        firstNum = parseFloat(displayValue);
        operator = sign.textContent;
        displayValue = '';
    })
})



document.querySelector('.equals').addEventListener('click', function(){
    if(operator === ''){
        return;
    }
    displayValue = operate(firstNum, parseFloat(displayValue), operator);
    updateDisplay();
    operator = '';
})

document.querySelector('.clear').addEventListener('click',function(){
    clearDisplay();
});





















// document.querySelectorAll('button').forEach(calcButton => {
//     calcButton.addEventListener('click', event=>{
//         let newNumInput = (calcButton.textContent);
//         if(calcButton.className === "digit"){
//             // if(displayNum.textContent != "" && firstNum != ""){
//             //     displayNum.textContent = "";
//             // }
//             displayNum.textContent = displayNum.textContent.concat(newNumInput);
//             secNum = parseInt(displayNum.textContent);
//         }
//         else if(calcButton.className === "operator"){
//             if(calcButton.textContent ==="CLR"){
//                 operator, firstNum, secNum = "";
//                 displayNum.textContent = "";
//             }
//             else if(firstNum != ''){
//                 secNum = displayNum.textContent;
//                 displayNum.textContent = operate(parseInt(firstNum), parseInt(secNum), operator);
//                 firstNum = parseInt(displayNum.textContent);
//                 secNum = '';
//                 operator = calcButton.textContent;
//             }
//             else{
//                 firstNum = parseInt(displayNum.textContent);
//                 displayNum.textContent = "";
//                 operator = calcButton.textContent;
//             }
//         }
//     })
// })








