function checkEnter(event, nextField, action) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (action === "calculate") {
            calculateIMC();
        } else {
            document.getElementById(nextField).focus();
        }
    }
}

function calculateIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    const imc = peso / (altura * altura);

    let message = "";

    if (imc < 17) {
        message = "Você está muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
        message = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
        message = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        message = "Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
        message = "Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
        message = "Obesidade II (severa)";
    } else if (imc >= 40.0) {
        message = "Obesidade III (mórbida)";
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>" + message;

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}