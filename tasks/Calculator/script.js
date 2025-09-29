function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}
function resultval(){
    return document.getElementById("result").value;
}
function calculateResult() {
    try { 
        const result = eval(resultval());
        document.getElementById("result").value = result;
        if(result===undefined){
            clearResult();
        }
    } catch (error) {
        clearResult();
    }
}
function backspace(){
    let currentval=resultval();
    return document.getElementById("result").value =currentval.slice(0,-1);

}
function onlyNumbers(event) {
    if (event.key >= '0' && event.key <= '9' || event.key === '+' || event.key === '-' || 
        event.key === '*' || event.key === '/' || event.key === '.' || event.key === 'Backspace' 
        || event.key === 'Enter' || event.key === 'Delete' || event.key === 'ArrowLeft' ||
         event.key === 'ArrowRight') {
        return true;
    }   
    return false;
}
document.getElementById("result").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculateResult();
    }   

    if (event.key === "Backspace") {
        backspace();
    }
    if (event.key === "Delete") {   
        clearResult();
    }   
});