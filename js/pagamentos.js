function calcularSalario() {
    var cargo = document.getElementById("cargo").value.toLowerCase();
    var salario = parseFloat(document.getElementById("salario").value);
    var aumento = 0;

    if (cargo === "gerente") {
        aumento = 0.05;
    } else if (cargo === "supervisor") {
        aumento = 0.08;
    } else if (cargo === "operador") {
        aumento = 0.09;
    } else {
        aumento = 0.1;
    }

    var valor = salario * aumento;
    var novoSalario = salario + valor;

    document.getElementById("resultado").style.display = "block";
    document.getElementById("salarioAtual").textContent = "Salário atual: R$" + salario.toFixed(2);
    document.getElementById("aumento").textContent = "Aumento: " + (aumento * 100) + "%";
    document.getElementById("valorAumento").textContent = "Valor do aumento: R$" + valor.toFixed(2);
    document.getElementById("novoSalario").textContent = "Novo salário: R$" + novoSalario.toFixed(2);

    document.getElementById("cargo").value = "";
    document.getElementById("salario").value = "";


    document.getElementById("cargo").focus();
}


document.getElementById("cargo").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("salario").focus();
    }
});

document.getElementById("salario").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (document.getElementById("cargo").value !== "" && document.getElementById("salario").value !== "") {
            calcularSalario();
        } else {
            alert("Por favor, preencha ambos os campos antes de calcular o salário.");
        }
    }
});