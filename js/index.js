document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    // insertamos el nombre de usuario en la barra superior
    document.getElementById("userNameBlock").innerText = window.localStorage.getItem("user");
});

function logout() {
    window.localStorage.removeItem("user");
    window.location.href = "index.html";
}