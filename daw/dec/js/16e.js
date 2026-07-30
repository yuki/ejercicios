const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
]

const introducido = []

document.addEventListener("keydown", (e) => {
    introducido.push(e.key);
    if (introducido.length > 10) {
        introducido.shift()
        console.log(introducido);
        console.log(konamiCode);
        let iguales = true;
        for (let index = 0; index < introducido.length; index++) {
            if (introducido[index] != konamiCode[index]){
                iguales = false;
                break;
            }
        }
        if (iguales) {
            alert("Código introducido!");
        }
    }
});