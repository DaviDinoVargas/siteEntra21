function nextInput(event, nextInputId) {
    if (event.key === "Enter") {
        document.getElementById(nextInputId).focus();
        event.preventDefault();
    }
}

function calcularComEnter(event) {
    if (event.key === "Enter") {
        calcularMedia();
    }
}

function calcularMedia() {
 
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var frequencia = parseFloat(document.getElementById("frequencia").value);
    
   
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(frequencia)) {
    
        var media = (nota1 + nota2 + nota3) / 3;
        
     
        if (media >= 7 && frequencia >= 75) {
            alert("Aluno aprovado! Média: " + media.toFixed(2) + ", Frequência: " + frequencia.toFixed(2) + "%");
            
        
            document.getElementById("nota1").value = "";
            document.getElementById("nota2").value = "";
            document.getElementById("nota3").value = "";
            document.getElementById("frequencia").value = "";
            
        
            document.getElementById("nota1").focus();
        } else {
            alert("Aluno reprovado. Média: " + media.toFixed(2) + ", Frequência: " + frequencia.toFixed(2) + "%");
        }
    }
}