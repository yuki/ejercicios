const URL = "https://jsonplaceholder.typicode.com/users";

function fun1 () {
    fetch(URL)
      .then((respuesta) => {
          console.log(respuesta);
          console.log(respuesta.status);
          console.log(respuesta.ok);
          if (!respuesta.ok) {
              throw new Error("Error en la petición.");
          }
          return respuesta.json();
      })
      .then((datos) => {
          console.log(datos);
      })
      .catch((error) => {
          console.log("Ha habido algún error en la petición");
          console.log(error);
      });
}

async function fun2() {
    try {
        const respuesta = await fetch(URL);
        const usuarios = await respuesta.json();
        
        if (!respuesta.ok) {
            throw new Error("Error en la petición.");
        } else {
            console.log(usuarios);
        }
    }
    catch(error){
        console.error(error);
    }
}


const boton1 = document.getElementById("boton1");
boton1.addEventListener(
    "click",
    fun1
)


const boton2 = document.getElementById("boton2");
boton2.addEventListener(
    "click",
    fun2
)