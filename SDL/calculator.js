// JavaScript code for the calculator
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (e) {
      alert("Invalid expression");
    }
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  