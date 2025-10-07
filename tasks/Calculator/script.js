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
    try { 
        const result = eval(resultval());
        document.getElementById("result").value = result;
        if(result === undefined){
            clearResult();
        }
    } catch (error) {
        clearResult();
    }
    document.getElementById("result").focus();
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
    event.preventDefault(); // prevent invalid keys
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
        event.preventDefault(); // prevent default backspace behavior
    }

    if (event.key === "Delete") {   
        clearResult();
        event.preventDefault();
    }   
});

// Keep the input focused all the time to show caret
resultInput.focus();
setInterval(() => resultInput.focus(), 100);
