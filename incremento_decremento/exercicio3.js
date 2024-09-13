/*Crie um programa que utiliza um loop while para calcular a
soma dos números de 1 a 100.*/

let n = 1;// inicializa n com o valor 1
let soma = 0;// inicializa a variável soma com 0

while ( n <= 100) { // enquanto n for menor ou igual a 100
    soma += n;// adiciona o valor de n é variavel soma 
    n++;// Incrementa n em 1
}
console.log("A soma dos números de 1 a 100 é :"  + soma);