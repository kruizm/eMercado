function estrellas(cantidad) {
    const html_estrella_llena = "fa fa-star checked";
    const html_estrella_vacia = "fa fa-star";
    let cant = 0;
    let html_estrellas = "<i>";
    // crear estrellas llenas hasta el score del usuario
    while(cant++ < cantidad) {
        html_estrellas += '<span class="'+html_estrella_llena+'"></span>';
    }

    // llenar hasta 5 las estrellas vacias que faltan
    while(cant++ <= 5) {
        html_estrellas += '<span class="'+html_estrella_vacia+'"></span>';
    }
    html_estrellas += "</i>";
    return html_estrellas;
}

document.addEventListener("DOMContentLoaded", function() {
    (getJSONData(PRODUCT_INFO_URL + window.localStorage.getItem("prodID") + ".json")
        .then(r => {
            let nombre = document.getElementById("nombre");
            let descripcion = document.getElementById("descripcion");
            let precio = document.getElementById("precio");
            let categoria = document.getElementById("categoria");
            let cantVendidos = document.getElementById("vendidos");

            // poner los datos del producto en los elementos
            nombre.innerText = r.data.name;
            precio.innerText = r.data.currency + " " + r.data.cost;
            descripcion.innerText = r.data.description;
            categoria.innerText = r.data.category;
            cantVendidos.innerText = r.data.soldCount;

            let imagenes = document.getElementById("imagenes");
            imagenes.innerHTML = "";
            for(let img of r.data.images) {
                // crear imagenes por cada imagen que tenemos (usamos columnas para que autoajuste tamaño)
                imagenes.innerHTML += `<div class="col"><img src="${img}" class="mw-100"></div>`;
                console.log(imagenes.innerHTML);
            }
        })
        // ir a buscar comentarios de los usuarios
        .then(() => getJSONData(PRODUCT_INFO_COMMENTS_URL + window.localStorage.getItem("prodID")+".json")).then(r => {
            let htmlContentToAppend = "";
            for(let comm of r.data) {
                // se crea un elemento por cada comentario
                htmlContentToAppend += `
                <div class="list-group-item">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <span><b>${comm.user}</b>
                                <i>${comm.dateTime}</i></span>
                                ${estrellas(comm.score)}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            ${comm.description}
                        </div>
                    </div>
                </div>
                `    
            }
            document.getElementById("comment-list").innerHTML = htmlContentToAppend;
        })
    )
})