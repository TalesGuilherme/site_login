function verificarFormulario() {
    var camposFormulario = document.getElementById("formulario").elements;

    //Verificando se todos os campos foram preenchidos
    for(var i = 0; i < camposFormulario.length - 1; i++) {
        if (camposFormulario[i].value === "") {
            alert("Por favor, preencha todos os campos do formulário");
            return;
        }
    }

    window.location.href = "login.html";
}