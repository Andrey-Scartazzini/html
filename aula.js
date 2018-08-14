function enviar() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var senha = document.getElementById("senha").value;
    if (nome == "" | idade == "" | senha == "") {
        alert("nada");
        return false;
    } else {
        alert("ok");
        return true;
    }
}