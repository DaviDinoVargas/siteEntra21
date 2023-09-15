function verificarIdade() {
    var idadeInput = document.getElementById("idade");
    var idade = parseInt(idadeInput.value);

    if (isNaN(idade) || idade < 1) {
        alert("Por favor, preencha a idade corretamente.");
        idadeInput.focus(); 
        return; 
    }

    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }

    idadeInput.value = "";
}

function verificarComEnter(event) {
    if (event.key === "Enter") {
        verificarIdade();
    }
}