function appendToResult(value) {
    const resultInput = document.getElementById("result");
    resultInput.value += value;
    resultInput.focus(); // keep focus to show caret
}

function clearResult() {
    const resultInput = document.getElementById("result");
    resultInput.value = "";
    resultInput.focus();
}

function resultval() {
    return document.getElementById("result").value;
}

function calculateResult() {
    const resultInput = document.getElementById("result");
    try { 
        const result = eval(resultval());

        // If eval returns undefined
        if (result === undefined || result === null) {
            throw new Error("Invalid expression");
        }

        resultInput.value = result;
    } catch (error) {
        // Show error
        resultInput.value = "Error";

        // Clear after 1 second
        setTimeout(() => clearResult(), 1000);
    }
    resultInput.focus();
}

function backspace() {
    let currentval = resultval();
    document.getElementById("result").value = currentval.slice(0, -1);
    document.getElementById("result").focus();
}

function onlyNumbers(event) {
    if ((event.key >= '0' && event.key <= '9') || 
        event.key === '+' || event.key === '-' || 
        event.key === '*' || event.key === '/' || 
        event.key === '.' || event.key === 'Backspace' || 
        event.key === 'Enter' || event.key === 'Delete' || 
        event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        return true;
    }   
    event.preventDefault();
    return false;
}

// Add event listener for key presses
const resultInput = document.getElementById("result");
resultInput.addEventListener("keydown", function(event) {
    onlyNumbers(event);

    if (event.key === "Enter") {
        calculateResult();
    }   

    if (event.key === "Backspace") {
        backspace();
        event.preventDefault(); 
    }

    if (event.key === "Delete") {   
        clearResult();
        event.preventDefault();
    }   
});

resultInput.focus();
setInterval(() => resultInput.focus(), 100);