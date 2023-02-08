function add(num1,num2) {return num1+num2;}

function subtract(num1,num2) {return num1-num2;}

function multiply(num1,num2) {return num1*num2;}

function divide(num1,num2) {return num1/num2;}

function operate(op , num1,num2){
    switch(op){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case 'x':
            return multiply(num1,num2);
            break;
        case '÷':
            return divide(num1,num2);
            break;
        
    }
}

// console.log(operate('-',2,1));


const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let operator = '';
let num;
for(let i of buttons){
    i.addEventListener('click',(e) =>{
        // console.log(e.target.className);
        if (e.target.className == 'num') {
            if (Number(display.textContent) ){ //Checks if the display has a operator or not, if yes then clears it and then displays a number
            display.textContent+=e.target.textContent;
            }
            else{
                display.textContent = '';
                display.textContent+=e.target.textContent;

            }

        }
        else if(e.target.className == 'op'){
            num = (display.textContent);
            operator = e.target.textContent;
            display.textContent =  e.target.textContent;
        }
        else if(e.target.className == 'clear') display.textContent = display.textContent.slice(0,-1);
        else if(e.target.className == 'allClear') display.textContent = '';
        else {
            display.textContent = operate(operator,Number(num),Number(display.textContent));
        }; 
         


    })
}