async function cargarUsuarios() {
    try {
        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!respuesta.ok) {
            throw new Error("Error al obtener los usuarios.");
        }
        return await respuesta.json();
    }
    catch (error) {
        console.error(error);
    }
}

function agregarFilaUsuario(usuario) {
    const tbody = document.querySelector("#usuarios");
    const fila = document.createElement("tr");

    const crearCelda = (contenido) => {
        const celda = document.createElement("td");
        celda.textContent = contenido;
        return celda;
    };

    fila.appendChild(crearCelda(usuario.id));
    fila.appendChild(crearCelda(usuario.name));
    fila.appendChild(crearCelda(usuario.email));
    fila.appendChild(crearCelda(usuario.phone));
    fila.appendChild(crearCelda(usuario.website));

    const celdaAcciones = document.createElement("td");
    const botonEditar = document.createElement("button");
    botonEditar.type = "button";
    botonEditar.className = "boton-editar";
    botonEditar.dataset.id = usuario.id;
    botonEditar.textContent = "Editar";

    const botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.className = "boton-borrar";
    botonBorrar.dataset.id = usuario.id;
    botonBorrar.textContent = "Borrar";

    celdaAcciones.appendChild(botonEditar);
    celdaAcciones.appendChild(botonBorrar);
    fila.appendChild(celdaAcciones);

    tbody.appendChild(fila);
}

async function mostrarUsuarios() {
    const usuarios = await cargarUsuarios();

    for (const usuario of usuarios) {
        agregarFilaUsuario(usuario);
    }
}

let usuarioEditandoId = null;

function abrirModal(usuario = null) {
    document.getElementById("modalUsuario").classList.add("show");
    document.getElementById("formUsuario").reset();
    document.getElementById("mensajeFormulario").textContent = "";

    if (usuario) {
        usuarioEditandoId = usuario.id;
        document.getElementById("nombre").value = usuario.name || "";
        document.getElementById("usuario").value = usuario.username || "";
        document.getElementById("email").value = usuario.email || "";
        document.getElementById("calle").value = usuario.address?.street || "";
        document.getElementById("ciudad").value = usuario.address?.city || "";
        document.getElementById("codigoPostal").value = usuario.address?.zipcode || "";
        document.getElementById("telefono").value = usuario.phone || "";
        document.getElementById("web").value = usuario.website || "";
    } else {
        usuarioEditandoId = null;
    }
}

function cerrarModal() {
    document.getElementById("modalUsuario").classList.remove("show");
    usuarioEditandoId = null;
}

function validarDatos(datos) {
    const errores = [];

    if (!datos.nombre.trim()) {
        errores.push("El nombre es obligatorio.");
    }

    if (!datos.usuario.trim()) {
        errores.push("El usuario es obligatorio.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
        errores.push("El email no es válido.");
    }

    if (!datos.calle.trim()) {
        errores.push("La calle es obligatoria.");
    }

    if (!datos.ciudad.trim()) {
        errores.push("La ciudad es obligatoria.");
    }

    if (!datos.codigoPostal.trim()) {
        errores.push("El código postal es obligatorio.");
    }

    if (!datos.telefono.trim()) {
        errores.push("El teléfono es obligatorio.");
    }

    if (!/^https?:\/\/\S+/.test(datos.web)) {
        errores.push("La web debe tener formato URL.");
    }

    return errores;
}

async function enviarUsuario(evento) {
    evento.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        email: document.getElementById("email").value,
        calle: document.getElementById("calle").value,
        ciudad: document.getElementById("ciudad").value,
        codigoPostal: document.getElementById("codigoPostal").value,
        telefono: document.getElementById("telefono").value,
        web: document.getElementById("web").value
    };

    const errores = validarDatos(datos);
    const mensaje = document.getElementById("mensajeFormulario");

    if (errores.length > 0) {
        mensaje.textContent = errores.join(" ");
        mensaje.style.color = "red";
        return;
    }

    try {
        const url = usuarioEditandoId
            ? `https://jsonplaceholder.typicode.com/users/${usuarioEditandoId}`
            : "https://jsonplaceholder.typicode.com/users";

        const metodo = usuarioEditandoId ? "PUT" : "POST";

        const respuesta = await fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: datos.nombre.trim(),
                username: datos.usuario.trim(),
                email: datos.email.trim(),
                address: {
                    street: datos.calle.trim(),
                    city: datos.ciudad.trim(),
                    zipcode: datos.codigoPostal.trim()
                },
                phone: datos.telefono.trim(),
                website: datos.web.trim()
            })
        });

        if (!respuesta.ok) {
            throw new Error("No se pudo guardar el usuario.");
        }

        const usuarioGuardado = await respuesta.json();

        if (usuarioEditandoId) {
            const filaEditar = document.querySelector(`.boton-editar[data-id="${usuarioEditandoId}"]`).closest("tr");
            filaEditar.innerHTML = `
                <td>${usuarioGuardado.id}</td>
                <td>${usuarioGuardado.name}</td>
                <td>${usuarioGuardado.email}</td>
                <td>${usuarioGuardado.phone}</td>
                <td>${usuarioGuardado.website}</td>
                <td>
                    <button type="button" class="boton-editar" data-id="${usuarioGuardado.id}">Editar</button>
                    <button type="button" class="boton-borrar" data-id="${usuarioGuardado.id}">Borrar</button>
                </td>
            `;
            mensaje.textContent = "Usuario actualizado correctamente.";
        } else {
            agregarFilaUsuario({
                id: usuarioGuardado.id,
                name: usuarioGuardado.name,
                email: usuarioGuardado.email,
                phone: usuarioGuardado.phone,
                website: usuarioGuardado.website
            });
            mensaje.textContent = "Usuario creado correctamente.";
        }

        mensaje.style.color = "green";
        document.getElementById("formUsuario").reset();
        cerrarModal();
    }
    catch (error) {
        console.error(error);
        mensaje.textContent = error.message;
        mensaje.style.color = "red";
    }
}

document.getElementById("abrirModal").addEventListener("click", () => abrirModal());
document.getElementById("cerrarModal").addEventListener("click", cerrarModal);
document.getElementById("modalUsuario").addEventListener("click", (evento) => {
    if (evento.target.id === "modalUsuario") {
        cerrarModal();
    }
});
document.getElementById("formUsuario").addEventListener("submit", enviarUsuario);
document.querySelector("#usuarios").addEventListener("click", async (evento) => {
    const botonEditar = evento.target.closest(".boton-editar");
    const botonBorrar = evento.target.closest(".boton-borrar");

    if (botonEditar) {
        const id = Number(botonEditar.dataset.id);
        const fila = botonEditar.closest("tr");
        const usuario = {
            id,
            name: fila.children[1].textContent,
            username: "",
            email: fila.children[2].textContent,
            address: {
                street: "",
                city: "",
                zipcode: ""
            },
            phone: fila.children[3].textContent,
            website: fila.children[4].textContent
        };

        abrirModal(usuario);
        return;
    }

    if (botonBorrar) {
        const id = Number(botonBorrar.dataset.id);
        const mensaje = document.getElementById("mensajeFormulario");

        try {
            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE"
            });

            if (!respuesta.ok) {
                throw new Error("No se pudo borrar el usuario.");
            }

            botonBorrar.closest("tr").remove();
            mensaje.textContent = "Usuario borrado correctamente.";
            mensaje.style.color = "green";
        }
        catch (error) {
            console.error(error);
            mensaje.textContent = error.message;
            mensaje.style.color = "red";
        }
    }
});

mostrarUsuarios();