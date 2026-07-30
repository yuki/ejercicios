// Ejemplo similar a  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_stoppropagation

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

div1.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
});

div2.addEventListener("click", (e) => {
    console.log(e.target.id);
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }

});