var peso = document.querySelector(".peso");
var altura = document.querySelector(".altura");
var imc;
var resultadoImc;
var paragrafoResultado = document.querySelector("#resultado");

function pegaValores() {
    event.preventDefault();

    imc = calculaImc(peso.value, altura.value);
    paragrafoResultado.innerText = "Seu IMC é de " + imc + " kg/m2."
    console.log(resultadoImc);
}

function percorreElemento() {
    var elementos = document.querySelectorAll("tr");

    for (var elemento of elementos) {
        elemento.style.backgroundColor = "black";
        elemento.style.color = "white";
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    if (imc < 18.5) {
        retornaValor = imc.toFixed(1);
        document.querySelector("#linha1").style.backgroundColor = "red";
    }
    if (imc >= 18.5 && imc < 25) {
        retornaValor = imc.toFixed(1);
        document.querySelector("#linha2").style.backgroundColor = "red";
    }
    if (imc >= 25 && imc < 30) {
        retornaValor = imc.toFixed(1);
        document.querySelector("#linha3").style.backgroundColor = "red";
    }
    if (imc >= 30 && imc < 40) {
        retornaValor = imc.toFixed(1);
        document.querySelector("#linha4").style.backgroundColor = "red";
    }
    if (imc >= 40) {
        retornaValor = imc.toFixed(1);
        document.querySelector("#linha5").style.backgroundColor = "red";
    }
    return retornaValor;
}

function print(texto) {
    document.write(texto + "<br>");
}