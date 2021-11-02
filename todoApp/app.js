


function init(){
console.log("Hello World!");
let bnt = document.getElementById("btnSave");
sayHello();

// create an age variable
// call a test2 function
let age = "33"
test2(age);

let result = sum(21, 21);
console.log(result)

//  create an array
let names = [];
names.push('Gary');
names.push('Angel');
names.push('Oscar');
names.push('Kvon');
names.push('Sergio');

console.log(names);

printNamesInCaps(names);

let numbers = [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234];
printSumOfNums(numbers);
}

// test2
// print the age
function test2(age){
    console.log(age);
}

function sum(num1, num2){
    return num1 + num2;
}
function printNamesInCaps(listOfNames){
    for(let i = 0; i<listOfNames.length; i++){
        console.log(i);

        let name = listOfNames[i];
        console.log(name.toUpperCase());
    };
    
}
function printSumOfNums(sumOfNumbers){
    let sum= 0;
    for(let i = 0; i< sumOfNumbers.length; i++){
        let num = sumOfNumbers[i];
        sum = sum + num;
        
    };
    console.log("The Sum of Numbers is ", sum);
}

function sayHello(){
    console.log("Gary")
}
window.onload = init;