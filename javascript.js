function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function div(a,b) {
    return a / b;
}
function calculation() {
    if (displayArrayOne.length > 0 && operationArray.length > 0 && displayArrayTwo.length === 0) {
        return;
    }
    if (displayArrayOne.includes('.')) {
        if (operationArray[0] === "+") {
            let result = add(parseFloat(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join("")
            operation = false;
        }
        if (operationArray[0] === "-") {
            let result = sub(parseFloat(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
        if (operationArray[0] === "x") {
            let result = multiply(parseFloat(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
        if (operationArray[0] === "/") {
            let result = div(parseFloat(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
    }
    if (displayArrayTwo.includes('.')) {
        if (operationArray[0] === "+") {
            let result = add(parseInt(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join("")
            operation = false;
        }
        if (operationArray[0] === "-") {
            let result = sub(parseInt(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
        if (operationArray[0] === "x") {
            let result = multiply(parseInt(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
        if (operationArray[0] === "/") {
            let result = div(parseInt(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
    }
    if (displayArrayOne.includes('.') && displayArrayTwo.includes('.')) {
        if (operationArray[0] === "+") {
            let result = add(parseFloat(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join("")
            operation = false;
        }
        if (operationArray[0] === "-") {
            let result = sub(parseFloat(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
        if (operationArray[0] === "x") {
            let result = multiply(parseFloat(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
        if (operationArray[0] === "/") {
            let result = div(parseFloat(displayArrayOne.join('')),parseFloat(displayArrayTwo.join('')))
            displayArrayOne.splice(0,displayArrayOne.length);
            displayArrayTwo.splice(0,displayArrayTwo.length);
            operationArray.splice(0,operationArray.length);
            displayArrayOne.push(result);
            display.innerHTML = displayArrayOne.join('')
            operation = false;
        }
    }
    if (operationArray[0] === "+") {
        let result = add(parseInt(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
        displayArrayOne.splice(0,displayArrayOne.length);
        displayArrayTwo.splice(0,displayArrayTwo.length);
        operationArray.splice(0,operationArray.length);
        displayArrayOne.push(result);
        display.innerHTML = displayArrayOne.join("")
        operation = false;
    }
    if (operationArray[0] === "-") {
        let result = sub(parseInt(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
        displayArrayOne.splice(0,displayArrayOne.length);
        displayArrayTwo.splice(0,displayArrayTwo.length);
        operationArray.splice(0,operationArray.length);
        displayArrayOne.push(result);
        display.innerHTML = displayArrayOne.join('')
        operation = false;
    }
    if (operationArray[0] === "x") {
        let result = multiply(parseInt(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
        displayArrayOne.splice(0,displayArrayOne.length);
        displayArrayTwo.splice(0,displayArrayTwo.length);
        operationArray.splice(0,operationArray.length);
        displayArrayOne.push(result);
        display.innerHTML = displayArrayOne.join('')
        operation = false;
    }
    if (operationArray[0] === "/") {
        let result = div(parseInt(displayArrayOne.join('')),parseInt(displayArrayTwo.join('')))
        displayArrayOne.splice(0,displayArrayOne.length);
        displayArrayTwo.splice(0,displayArrayTwo.length);
        operationArray.splice(0,operationArray.length);
        displayArrayOne.push(result);
        display.innerHTML = displayArrayOne.join('')
        operation = false;
    }
}
function stringNumAdd(num) {
    if (operation === false) {
        displayArrayOne.push(num)
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push(num)
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
}


const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multi')
const divide = document.getElementById('divide')
const equal = document.getElementById('equals')
const comma = document.getElementById('comma');
const clear = document.getElementById('clear');
const deleteNum = document.getElementById('deleteNum')

const display = document.querySelector(".display")


let operation = false;

let displayArrayOne = [];
let displayArrayTwo = [];
let operationArray = [];
let currentResult = [];

clear.addEventListener('click',function(){
    displayArrayOne.splice(0,displayArrayOne.length);
    displayArrayTwo.splice(0,displayArrayTwo.length);
    operationArray.splice(0,operationArray.length);
    currentResult.splice(0,currentResult.length);
    display.innerHTML = 0
})
deleteNum.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.pop()
        if (displayArrayOne.length === 0) {
            display.innerHTML = '0'
        }
        else {
            display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
        }
    }
    if (operation === true) {
        displayArrayTwo.pop()
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
})

plus.addEventListener('click',function() {
    if (displayArrayOne.length > 0 && displayArrayTwo.length > 0) {
        calculation() 
    }
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = '+'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
minus.addEventListener('click',function() {
    if (displayArrayOne.length > 0 && displayArrayTwo.length > 0) {
        calculation() 
    }
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = '-'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
multi.addEventListener('click',function() {
    if (displayArrayOne.length > 0 && displayArrayTwo.length > 0) {
        calculation() 
    }
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = 'x'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
divide.addEventListener('click',function() {
    if (displayArrayOne.length > 0 && displayArrayTwo.length > 0) {
        calculation() 
    }
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = '/'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
comma.addEventListener('click',function(){
    if (operation === false) {
        if (displayArrayOne.includes('.')) {
            return;
        }
        displayArrayOne.push('.')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        if (displayArrayTwo.includes('.')) {
            return
        }
        displayArrayTwo.push('.')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
})
one.addEventListener('click',function() {
    stringNumAdd('1')  
})
two.addEventListener('click',function() {
    stringNumAdd('2')  
})
three.addEventListener('click',function() {
    stringNumAdd('3')  
})
four.addEventListener('click',function() {
    stringNumAdd('4')  
})
five.addEventListener('click',function() {
    stringNumAdd('5')  
})
six.addEventListener('click',function() {
    stringNumAdd('6')  
})
seven.addEventListener('click',function() {
    stringNumAdd('7') 

})
eight.addEventListener('click',function() {
    stringNumAdd('8') 

})
nine.addEventListener('click',function() {
    stringNumAdd('9') 

})
zero.addEventListener('click',function() {
    stringNumAdd('0') 

})

equal.addEventListener('click',function() {
    calculation() 
    
})


