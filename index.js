const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


window.onload = function() {
    init("form");
};

function init(formId) {
    var form = document.getElementById(formId);
    console.log(formId);

    form.addEventListener("submit", function(e) {
        var email = document.getElementById("mail").value;
        
        if (email.trim() === '') {
            alert('Por favor, ingresa una dirección de correo electrónico.');
            e.preventDefault(); // Evitar el envío del formulario
        } else {
            alert("Formulario enviado");
        }
    });
}




var formContacto = document.getElementById("form-contacto");

// Agrega un evento "submit" al formulario
formContacto.addEventListener("submit", function(e) {
    //e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Aquí puedes realizar acciones o validaciones cuando se envía el formulario

    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var mensaje = document.getElementById("mensaje").value;

    // Aquí puedes procesar o guardar estos valores
    console.log("Nombre: " + nombre);
    console.log("Teléfono: " + telefono);
    console.log("Dirección: " + direccion);
    console.log("Mensaje: " + mensaje);
    
    alert("Formulario enviado"); // Ejemplo: muestra una alerta
});









