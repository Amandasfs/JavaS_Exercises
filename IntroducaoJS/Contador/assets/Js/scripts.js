var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber + 1;
    if(currentNumber <= 100 && currentNumber >=-100){
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
function decrement(){
    currentNumber = currentNumber - 1;
    if(currentNumber <= 100 && currentNumber >=-100){
        currentNumberWrapper.innerHTML = currentNumber;
    }
}