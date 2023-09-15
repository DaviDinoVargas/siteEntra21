function verificarIdade() {
    var idadeInput = document.getElementById("idade");
    var idade = parseInt(idadeInput.value);

    if (isNaN(idade) || idade < 1) {
        alert("Por favor, preencha a idade corretamente.");
        idadeInput.focus();
        return;
    }

    if (idade >= 18) {
        
        document.querySelector(".resultado").style.display = "block";
        document.querySelector(".resultado .ok").textContent = "Maior de Idade";
    } else {
        
        alert("Você é menor de idade.");
       
        document.querySelector(".resultado").style.display = "none";
    }

    idadeInput.value = "";
}

function verificarComEnter(event) {
    if (event.key === "Enter") {
        verificarIdade();
    }
}