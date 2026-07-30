const lista = document.querySelector("#lista");

// for (let i = 0; i < 10000; i++) {
//     const element = document.createElement("li")
//     element.textContent = i;
//     lista.append(element);
// }

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 10000; i++) {
    const element = document.createElement("li")
    element.textContent = i;
    fragmento.append(element);
}

lista.append(fragmento);