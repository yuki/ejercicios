/*
 * Ejemplo de formulario con errores:
 *  - en el HTML quita los "required" si quieres validación propia solamente
 *  - tal como está, aparecen todos los errores de validación de golpe
 *  - puedes descomentar los "return" de cada función y así sólo saldrá un error a la vez
 * 
 * Ejemplo "muy manual", en el 17e se mejora la programación.
 */

const formulario = document.querySelector("#registro");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const edad = document.querySelector("#edad");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const condiciones = document.querySelector("#condiciones");
let validado = true;

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
    evento.preventDefault();
    validado = true;

    // limpiamos errores CSS
    const divs = document.querySelectorAll("#registro div");
    for (const div of divs) {
        div.classList.remove("error");
    }

    // limpiamos textos de error
    const errorNombre = document.querySelector("#errorNombre");
    errorNombre.textContent = "";
    const errorEmail = document.querySelector("#errorEmail");
    errorEmail.textContent = "";
    const errorEdad = document.querySelector("#errorEdad");
    errorEdad.textContent = "";
    const errorPassword = document.querySelector("#errorPassword");
    errorPassword.textContent = "";
    const errorCondiciones = document.querySelector("#errorCondiciones");
    errorCondiciones.textContent = "";

    // forzar nombre a 5 en lugar de 3
    if (nombre.value.length < 5) {
        errorNombre.textContent = "El nombre debe tener 5 caracteres.";
        nombre.focus();
        validado = false;
        document.querySelector("#divnombre").classList.add("error");
        // return;
    }

    if (email.value == "") {
        errorEmail.textContent = "El email no puede estar vacío";
        email.focus();
        validado = false;
        document.querySelector("#divemail").classList.add("error");
        // return;
    }

    if (Number(edad.value) < 18) {
        errorEdad.textContent = "Debe ser mayor de edad.";
        edad.focus();
        validado = false;
        document.querySelector("#divedad").classList.add("error");
        // return;
    }

    if (password.value === "" || password.value === "" ||  password.value !== password2.value) {
        errorPassword.textContent = "Las contraseñas no coinciden";
        password2.focus();
        validado = false;
        document.querySelector("#divpassword").classList.add("error");
        document.querySelector("#divpassword2").classList.add("error");
        // return;
    }

    if (!condiciones.checked) {
        errorCondiciones.textContent = "Debe aceptar las condiciones.";
        condiciones.focus();
        validado = false;
        document.querySelector("#divcheckbox").classList.add("error");
        // return;
    }

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        validado = false;
        // return;
    }

    if (validado) {
        formulario.submit();
    }
}