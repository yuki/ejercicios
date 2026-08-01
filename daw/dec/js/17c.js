// si sólo queremos validar un campo cuando pierda el foco

const password = document.querySelector("#password");
password.addEventListener("blur", (e)=>{
    if (password.value.length < 7){
        alert("password corta");
    }
})


// para validar todo el formulario al ser enviado
const boton = document.querySelector("#login");
boton.addEventListener("click", (e) => {
    const nombre = document.querySelector("#nombre");
    if (nombre.value === ""){
        alert("nombre vacío");
        e.preventDefault();
        nombre.focus();
        return 0;
    }

    const password = document.querySelector("#password");
    if (password.value.length < 7){
        alert("password demasiado corta");
        e.preventDefault();
        return 0;
    }

    const email = document.querySelector("#email");
    if (!email.checkValidity()) {
        alert("email no introducido");
        e.preventDefault();
        email.focus();
        return 0;
    }

    // una lista seleccionable
    const lista = document.querySelector("#hr-select");
    if (lista.selectedIndex == 0) {
        alert("Debe elegir comida")
        lista.focus();
        e.preventDefault();
        return 0;
    }


    // todos los controles
    // const controles = document.querySelectorAll("input");
    // for (const control of controles) {
    //     console.log(control);
    // }

    // todo el formulario
    // const formulario = document.querySelector("#registro");
    // for (const element of formulario) {
    //     console.log(element);
    // }




    // no mandar formulario, pero evita la validación HTML
    // e.preventDefault();
});