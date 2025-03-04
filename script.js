// To create a variable as a global to access it easily for all function which i created below
const inputFeild = document.getElementById("input-feild");

// this function will display the value of button
function showValue(input) {
    inputFeild.value = inputFeild.value + input; // this is longway to write this code
    // inputFeild.value += input; // this is the shortend way to rate the code
}

// This function will clear the input feild display 
function clearValue(){
    inputFeild.value = "";
}

// This function will calculates the value which we select the button it will goes through input feild 
function calcuateValue(){
    inputFeild.value = eval(inputFeild.value);
}

