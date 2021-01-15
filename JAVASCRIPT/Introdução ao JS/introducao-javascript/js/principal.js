//E uma boa prática não buscar pela tag em sim, mas sim pela classe
let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = document.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = document.querySelector(".info-altura");
let altura = tdAltura.textContent;

console.log(paciente); //tr
console.log(tdPeso); // td peso do paciênte

console.log(tdAltura);
console.log(altura); 

let tdImc = document.querySelector(".info-imc");
//calculando o imc
var imc = peso / (altura * altura);  
console.log(imc);

tdImc.textContent = imc; //coloca o resultado o imc na caixa imc