let num1 = 8;
let num2 = 2;
let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");
let sumeEl = document.getElementById("sum-el");
num1El.textContent = num1;
num2El.textContent = num2;

function add(){
   let result = num1 + num2;
   sumeEl.textContent = "Sum " + result;
}

function subtract(){
   let result = num1 - num2;
   sumeEl.textContent = "Sum " + result; 
}

function multiply(){
    let result = num1 * num2;
    sumeEl.textContent = "Sum " + result;
}

function divide(){
    let result = num1 / num2;
    sumeEl.textContent = "Sum " + result; 
}


