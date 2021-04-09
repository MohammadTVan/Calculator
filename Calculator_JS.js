"use strict"

function add(){
    var operand1 = Number(document.getElementById("number1").value);
    var operand2 = Number(document.getElementById("number2").value);
    var result = operand1+operand2;
    document.getElementById("result").value = operand1 + ' + ' + operand2 +' = '+ result;
}
function multiplication(){
  var operand1 = Number(document.getElementById("number1").value);
  var operand2 = Number(document.getElementById("number2").value);
    var result = operand1*operand2;
  document.getElementById("result").value = operand1 + " x " + operand2 +' = '+ result;

}
function divide(){
    var operand1 = Number(document.getElementById("number1").value);
    var operand2 = Number(document.getElementById("number2").value);
    var result = operand1/operand2;
    document.getElementById("result").value = operand1 + " / " + operand2 +' = '+ result;
  
}
