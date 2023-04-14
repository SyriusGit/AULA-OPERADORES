/*
//Exercício 1: a) Transformar 77°F em K
let grausFahrenheit = parseFloat(prompt("Digite a temperatura Fahrenheit: "));

let grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15

console.log(grausFahrenheit + "° Fahrenheit são iguais a " + grausKelvin + "° Kelvin")


//Exercício 1: b) Transformar 80°C em F
let grausCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));

grausFahrenheit = (grausCelsius)*(9/5) + 32

console.log(grausCelsius + "° Celsius são iguais a " + grausFahrenheit + "° Fahrenheit")


//Exercício 1: c) Transformar 30°C em F e K
grausCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));

grausFahrenheit = (grausCelsius)*(9/5) + 32

grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15

console.log(grausCelsius + "° Celsius são iguais à " + grausFahrenheit + "° Fahrenheit," + " que são iguais à " + grausKelvin +"° Kelvin")


//Exercício 1: d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter 
//(já foi feito durante os outros exercícios)


//Exercício 2: a) Calcular valor a ser pago com consumo de 280Kwh

let quilowatt = parseFloat(prompt("Quantos quilowatts-hora sua residência consome? "));

let valorPago = 0.05 * quilowatt


let desconto = valorPago * (85/100) // b) Calcular valor com 15% de desconto

console.log("Você deverá pagar " + valorPago + " reais em energia, contudo, o valor com desconto será de " + desconto + " reais." );

*/
//Exercício aula 13/04: média de notas

/*let nome = prompt("Informe seu nome: ");
nome = nome.toUpperCase();
let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota: "));
let nota3 = parseFloat(prompt("Informe a terceira nota: "));

media = (nota1 + nota2 + nota3)/3

if (nota1 && nota2 && nota3 <= 10 && nota1 && nota2 && nota3 >= 0){ //Delimitando opções de nota
    if (media >= 6){
        alert(`PARABÉNS ` + nome + `!!! VOCÊ FOI APROVADO COM UMA MÉDIA DE ` + media + ` PONTOS!`)
    } else {
        alert("Você foi reprovado, repita o ano")
    }
} else {
    alert(`ERRO!!!`)
}


let numero = Number(prompt("Digite um número: "));

validacao = numero % 2

console.log(validacao)

if (validacao === 0){ //Poderia ser simplesmente if (numero % 2 === 0){
    alert('O número é Par!')
} else{
    alert('O número é Ímpar!')
}
*/

let num1 = Number(prompt('Diga um número: '));
let num2 = Number(prompt('Diga mais um número: '));

if (num1 > num2){
    alert('O ' + num1 + ' é maior que o ' + num2)
} else{
    alert('O ' + num2 + ' é maior que o ' + num1)
}