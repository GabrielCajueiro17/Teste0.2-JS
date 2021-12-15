var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
var currentNumber = document.addEventListener("currentNumber");

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

