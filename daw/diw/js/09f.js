// código basado de https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
});


// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
    modal.style.display = "none";
    //evitar scroll
    document.body.classList.remove("modal-open");
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", () => {
    if (event.target == modal) {
        modal.style.display = "none";
        //evitar scroll
        document.body.classList.remove("modal-open");
    }
});
