var num = Math.floor(Math.random() * 11);
var contadorChances = 10;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);

    if (contadorChances > 0) {
        if (num == chute) {
            resultado.innerHTML = "Acertou.";
            console.log("acertou.");
        } else if (chute > 10 || chute < 0) {
            resultado.innerHTML = "Erro: o número deve ser apenas de 0 a 10.";
        } else if (num < chute) {
            contadorChances--;
            resultado.innerHTML =
                "Dica: o número é menor que o chutado. Você tem outras " +
                contadorChances +
                " chances de acertar.";
        } else if (num > chute) {
            contadorChances--;
            resultado.innerHTML =
                "Dica: o número é maior que o chutado. Você tem outras " +
                contadorChances +
                " chances de acertar.";
        }
    } else {
        resultado.innerHTML = "Limite de Tentativas Esgotado. O número era: " + num;
    }
}