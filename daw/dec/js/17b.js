const password = document.querySelector("#password");
password.addEventListener("blur", (e)=>{
    if (password.value.length < 7){
        alert("password corta");
    }
})



const boton = document.querySelector("#login");
boton.addEventListener("click", (e) => {
    const nombre = document.querySelector("#nombre");
    console.log(nombre.value);
    const password = document.querySelector("#password");
    console.log(password.value);

    //un checkbox o radio
    const coding = document.querySelector("#coding");
    console.log(coding.checked);

    // una lista seleccionable
    const lista = document.querySelector("#hr-select");
    // valor seleccionado
    console.log(lista.value);
    // índice del seleccionado
    let indice = lista.selectedIndex
    console.log(indice);
    // valor a través del índice
    console.log(lista[indice].text)


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