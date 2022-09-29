function tryLogin() {

    // buscamos el formulario
    var form = document.querySelectorAll(".needs-validation")[0];

    // corremos la validacion de bootstrap y si da correcto vamos al inicio XD
    if(form.checkValidity()) {
        window.location.href = "inicio.html";
    }

    // para que muestre los errores si se encontro alguno
    form.classList.add('was-validated');
}