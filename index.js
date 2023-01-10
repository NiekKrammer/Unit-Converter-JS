const button = document.getElementById("convert-btn");
const inputNr = document.getElementById("input-field");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");


button.addEventListener("click", function() {
    let num = inputNr.value;

    result1.textContent = `${num} meters = ${(num * 3.2808).toFixed(3)} feet | 
    ${num} feet = ${(num * 0.3048).toFixed(3)} meters`;

    result2.textContent = `${num} liters = ${(num * 0.264172).toFixed(3)} gallons | 
    ${num} gallons = ${(num * 3.785412).toFixed(3)} liters`;

    result3.textContent = `${num} kilos = ${(num * 2.20462262185).toFixed(3)} pounds | 
    ${num} pounds = ${(num * 0.45359237).toFixed(3)} kilos`;

    inputNr.value = null;
  }); 
  