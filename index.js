window.onload = init;

function init() {
    var form = document.getElementById("form");
    form.addEventListener("submit", validarFormulario);

}

function init() {
    var formExcursiones = document.getElementById("form");
    formExcursiones.addEventListener("submit", validarFormulario);

}

function init() {
    var formDistritos = document.getElementById("form");
    formDistritos.addEventListener("submit", validarFormulario);

}

function init() {
    var formHoteles = document.getElementById("form");
    formHoteles.addEventListener("submit", validarFormulario);

}

function init() {
    var formTransporte = document.getElementById("form");
    formTransporte.addEventListener("submit", validarFormulario);

}








function validarFormulario(e){
    e.preventDefault();
    alert("Formulario enviado");

}









const form = document.getElementById("form");
form.addEventListener ("submit", function(e){
    const fullname = document.getElementById("mail").value
    console.log("fullname", fullname)
})

const formExcursiones = document.getElementById("form-excursiones");
formExcursiones.addEventListener ("submit", function(e){
    const fullname = document.getElementById("mail-excursiones").value
    console.log("fullname", fullname)
})

const formDistritos = document.getElementById("form-distritos");
formDistritos.addEventListener ("submit", function(e){
    const fullname = document.getElementById("mail-distritos").value
    console.log("fullname", fullname)
})

const formHoteles = document.getElementById("form-hoteles");
formHoteles.addEventListener ("submit", function(e){
    const fullname = document.getElementById("mail-hoteles").value
    console.log("fullname", fullname)
})

const formTransporte = document.getElementById("form-transporte");
formTransporte.addEventListener ("submit", function(e){
    const fullname = document.getElementById("mail-transporte").value
    console.log("fullname", fullname)
})
