const formulario = document.querySelector("#formulario");

const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const email = document.querySelector("#email");
const edad = document.querySelector("#edad");
const curso = document.querySelector("#curso");
const privacidad = document.querySelector("#privacidad");

formulario.addEventListener("submit", validarFormulario);
let formularioValido = true;


function mostrarError(control, mensaje){
    const span = document.createElement("span");
    span.classList.add("error");
    span.textContent = mensaje;
    control.insertAdjacentElement("afterend", span);
}

function limpiarErrores(){
    const errores = document.querySelectorAll(".error");
    for(const error of errores){
        error.remove();
    }
    formularioValido = true;
}


function validarFormulario(evento){
    evento.preventDefault();
    limpiarErrores();

    if(!formulario.checkValidity()){
        formulario.reportValidity();
        formularioValido = false;
        // return;
    }

    if(nombre.value === ""){
        mostrarError(
            nombre,
            "El nombre no puede ser vacío."
        );
        nombre.focus();
        formularioValido = false;
        // return;
    }
    
    if(apellidos.value === ""){
        mostrarError(
            apellidos,
            "El apellido no puede ser vacío."
        );
        apellidos.focus();
        formularioValido = false;
        // return;
    }

    if(email.value === ""){
        mostrarError(
            email,
            "El email no puede ser vacío."
        );
        email.focus();
        formularioValido = false;
        // return;
    }


    if(Number(edad.value) < 16){
        mostrarError(
            edad,
            "La edad mínima es de 16 años."
        );
        edad.focus();
        formularioValido = false;
        // return;
    }

    if(curso.value === ""){
        mostrarError(
            curso,
            "Debe seleccionar un curso."
        );
        curso.focus();
        formularioValido = false;
        // return;
    }

    if(!privacidad.checked){
        mostrarError(
            privacidad,
            "Debe aceptar la política de privacidad."
        );
        privacidad.focus();
        formularioValido = false;
        // return;
    }

    if (formularioValido) {
        formulario.submit();
    }
    // alert("Alumno registrado correctamente.");
}