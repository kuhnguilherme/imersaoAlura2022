function Converter() {
    var elemento = document.getElementById("valor").value;
    var valorNumerico = parseFloat(elemento);

    if (valorNumerico > 0) {
        var elemento = document.getElementById("valor").value;
        var valorNumerico = parseFloat(elemento);

        var valorEmDolar = valorNumerico * 0.20;
        var valorEmEuros = valorNumerico * 0.18;
        var valorEmBTC = valorNumerico * 0.0000050;

        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertidoUSD = "Conversão em Dólar: $" + valorEmDolar.toFixed(2);
        var valorConvertidoEUR = "Conversão em Euros: $" + valorEmEuros.toFixed(2);
        var valorConvertidoBTC = "Conversão em BTC: $" + valorEmBTC.toFixed(7);

        elementoValorConvertido.innerHTML =
            valorConvertidoUSD +
            "<br />" +
            valorConvertidoEUR +
            "<br />" +
            valorConvertidoBTC;
    }
}