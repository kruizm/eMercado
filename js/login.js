document.addEventListener("DOMContentLoaded", function() {
    if(window.localStorage.getItem("user") !== null) {
        window.location.href = "inicio.html";
    }
});

function tryLogin() {

    // buscamos el formulario
    var form = document.querySelectorAll(".needs-validation")[0];

    // corremos la validacion de bootstrap y si da correcto vamos al inicio XD
    if(form.checkValidity()) {
        // guardamos en almacenamiento local el nombre de usuario para usarlo en el inicio
        window.localStorage.setItem("user", document.getElementById("userName").value);
        window.location.href = "inicio.html";
    }

    // para que muestre los errores si se encontro alguno
    form.classList.add('was-validated');
}