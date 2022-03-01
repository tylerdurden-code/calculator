function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
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
const equal = document.getElementById('equals')

const display = document.querySelector(".display")
// let arrayOnes = [];
// let arrayTwos = [];
// let arraySevens = [];

let operation = false;

let displayArrayOne = [];
let displayArrayTwo = [];
let operationArray = [];
let currentResult = [];

plus.addEventListener('click',function() {
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = '+'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
minus.addEventListener('click',function() {
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = '-'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
multi.addEventListener('click',function() {
    if (displayArrayOne.length === 0) {
        return 
    }
    operation = true 
    operationArray[0] = 'x'
    display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")
   
})
one.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('1')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('1')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }  
})
two.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('2')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('2')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }  
})
three.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('3')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('3')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }  
})
four.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('4')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('4')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }  
})
five.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('5')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('5')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }  
})
six.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('6')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('6')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }  
})
seven.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('7')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('7')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    } 

})
eight.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('8')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('8')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    } 

})
nine.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('9')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('9')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    } 

})
zero.addEventListener('click',function() {
    if (operation === false) {
        displayArrayOne.push('0')
        // display.innerHTML = displayArrayOne.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    }
    else {
        displayArrayTwo.push('0')
        // display.innerHTML = displayArrayTwo.join("")
        display.innerHTML = displayArrayOne.join('') + operationArray.join("") + displayArrayTwo.join("")

    } 

})

equal.addEventListener('click',function() {
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
})


