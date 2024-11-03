const increase = document.querySelector('#increase');
const decrease = document.querySelector("#decrease");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const operator = document.querySelector("#operator");
const result = document.querySelector("#result");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const errorMessage = document.querySelector("#errorMessage");
const duckImage = document.querySelector("#duck");



increase.onclick = getResult;
decrease.onclick = getResult;
multiply.onclick = getResult;
divide.onclick = getResult;

firstNumber.onchange = onChange;
secondNumber.onchange = onChange;

function onChange() {
    result.textContent = "?";
    errorMessage.textContent = "";
    duckImage.src = "./d2.png"
}

function getResult(event){
    onChange();
    let operatorSign = (event.target.value);
    operator.textContent = operatorSign;

    calcResult(operatorSign);
};

function calcResult(operatorSign) {
    const firstNumber = parseInt(document.getElementById("first-number").value);
    const secondNumber = parseInt(document.getElementById("second-number").value);
    if (firstNumber !== firstNumber || secondNumber !== secondNumber) {
        errorMessage.textContent = "Please enter some values."
        result.textContent = "error";
        duckImage.src = "./d3.png"
        return;
    } else if (secondNumber === 0 && operatorSign === "/") {
        errorMessage.textContent = "Cannot divide by 0. Please try another operation."
        result.textContent = "error";
        duckImage.src = "./d3.png"
        return;
    }
    
    let calc = eval(`${firstNumber} ${operatorSign} ${secondNumber}`);
    result.textContent = calc;
    duckImage.src = "./d1.png"
}