const botones = document.querySelectorAll("button");

for (const boton of botones) {
    boton.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target.textContent);
        console.log(`Coordenadas: ${e.clientX},${e.clientY}`);
    });
}

// Ejemplo de https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (e) => {
    console.log(e);
    const currentTarget = e.currentTarget.getAttribute("id");
    const target = e.target.getAttribute("id");
    output.textContent = `Current target: ${currentTarget}\n`;
    output.textContent += `Target: ${target}`;
});
