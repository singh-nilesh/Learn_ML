// use console.log() to print to the console( inspect)
console.log("Hello World");
var name = "Raj";
let action = 'erroer';
let num = 10;

// use Back tick `` for using Formating template, to use varibales
// but normal strings/datatypes  can be concatinated.
console.log('Hello %{name}'+action);
console.log(`Hello ${name}`+num);

// use  document.getElementById() to access HTML elements 
document.getElementById('heading').innerHTML = `Hello ${name}`;
document.getElementById('para').textContent = ` hey ${name}`

/*
// Types of prompts & Input Metohds

// 1. prompt --> allows user to enter input
window.prompt("Enter Your Name");

// 2. confirm --> allows user to select yes or no
window.confirm("Are you sure?");
// 3. alert --> allows user to see an alert
window.alert("You are in danger");
*/


// Button OnClick
document.getElementById('btnPrompt').onclick = function(){
    name = document.getElementById('name').value+" ";
    name += window.prompt("Enter Your Last Name");
}

document.getElementById('btnConfirm').onclick = function(){
    window.confirm("Are you sure?");
}

document.getElementById('btnAlert').onclick = function(){
    window.alert(`${name}You are in danger`);
}