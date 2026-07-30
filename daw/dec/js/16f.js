const output = document.querySelector("#output");
const focus = document.querySelector("#focus");
const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const nota = document.querySelector("#nota");
const story = document.querySelector("#story");

function reset () {
    nombre.style.backgroundColor = "";
    nota.style.accentColor = "";
    story.style.backgroundColor = "";
}
 
function verFoco (f) {
    focus.textContent = f;
    let a = document.querySelector("#"+f);
    console.log(f);
    if (f=="nota") {
        a.style.accentColor = "pink";
    } else {
        a.style.backgroundColor = "pink";
    }
}

form.addEventListener("input", (e) => {
    output.textContent = e.target.value;
});

nombre.addEventListener("focus", (e) => {
    reset();
    verFoco(e.target.id);
});

nota.addEventListener("focus", (e) => {
    reset();
    verFoco(e.target.id);
});

story.addEventListener("focus", (e) => {
    reset();
    verFoco(e.target.id);
});
