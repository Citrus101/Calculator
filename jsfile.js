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
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        
    }
}

// console.log(operate('-',2,1));