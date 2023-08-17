let amigochos = function () {
    $.get("http://localhost:5000/amigos", (data) => {
        let lista = $("#lista"); 
        lista.empty();
        data.forEach(amigo => {
            let list = document.createElement("li");
            list.innerText = `${amigo.name} es tu cuatacho numero ${amigo.id}`;
            lista.append(list); 
        });
    });
}
let buscarCuatacho = function () {
    let id = document.querySelector("#input").value; 
    let cuatacho = document.querySelector("#amigo");

    if (id) {
        $.get(`http://localhost:5000/amigos/${id}`, (respuesta) => {
            cuatacho.innerText = `Nombre: ${respuesta.name}`;
        });
    } else {
        cuatacho.innerText = "Cuatacho no encontrado";
    }
};

let borraCompadres = function (){
    let deleteInput = document.querySelector("#inputDelete").value;
    let sePudo = document.querySelector("#success");
    if(deleteInput) {
        $.ajax({type:"DELETE",
                url:`http://localhost:5000/amigos/${deleteInput}`});
                success : () => {amigochos()};
    }
}


$("#boton").on("click", amigochos);
$("#search").on("click", buscarCuatacho);
$("#delete").on("click", borraCompadres);