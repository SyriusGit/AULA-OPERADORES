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


//Exercício 1: d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter (já foi feito durante os outros exercícios)

//Exercício 2: a) Calcular valor a ser pago com consumo de 280Kwh

let quilowatt = parseFloat(prompt("Quantos quilowatts-hora sua residência consome? "));

let valorPago = 0.05 * quilowatt


let desconto = valorPago * (15/100) // terminar código

console.log("Você deverá pagar " + valorPago + " reais em energia")