var nome = "Guilherme Kuhn";

var notaPrimeiro = parseFloat(prompt("Qual sua Primeira Nota?"));
var notaSegundo = parseFloat(prompt("Qual sua Segunda Nota?"));
var notaTerceiro = parseFloat(prompt("Qual sua Terceira Nota?"));

var media = (notaPrimeiro + notaSegundo + notaTerceiro) / 3;

console.log(notaPrimeiro);
console.log(notaSegundo);
console.log(notaTerceiro);

console.log("Bem vindo, " + nome);
console.log("Sua média é: " + media.toFixed(1));

if (media >= 7) {
  console.log("Você Passou!");
}