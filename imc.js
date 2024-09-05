//calcule o imc de uma pessoa . IMC=peso/(altura)²

var peso;
var altura;

peso=81;
altura=1.61;
imc = peso / altura ** 2
console.log("Seu imc é de: \n",imc.toFixed(2))//reduzir numero depois da vírgula