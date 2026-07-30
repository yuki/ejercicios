const lista = document.querySelector("#lista");

const pan = document.createElement("li");
pan.textContent = "Pan";
lista.append(pan);

const arroz = document.createElement("li");
arroz.textContent = "Arroz";
lista.prepend(arroz);

const p = document.createElement("p");
p.textContent = "Hay que comprar:"
lista.before(p);

const fin = document.createElement("p");
fin.textContent = "No te olvides de nada!"
lista.after(fin);

// automatizado
const ingredientes = [
    "Cebollas",
    "Pimientos",
    "Garbanzos",
    "Patatas"
]

for (const ingrediente of ingredientes) {
    const elemento = document.createElement("li");
    elemento.textContent = ingrediente;
    lista.append(elemento);
}

// const i = document.createElement("h2")
// i.textContent = "IIII"
// lista.replaceWith(i)