const h = document.querySelector("#hola");
h.innerHTML = "Hola <strong>Alice</strong>";
const n = document.querySelector("#contenido");
n.innerHTML = `
  <h2>Noticias</h2>
  <p>bla bla</p>
`;

const t = document.querySelector("#hola");

t.innerHTML = '<img src="https://yuki.github.io/my-books/img/portada.png" onload="alert(\'hacked!\');">';