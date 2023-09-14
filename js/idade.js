function verificarIdade() {
  
    var idade = parseInt(document.getElementById("idade").value);
    

    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }

    document.getElementById("idade").value = "";
}

function verificarComEnter(event) {
    if (event.key === "Enter") {
        verificarIdade();
    }
}