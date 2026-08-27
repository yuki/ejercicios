const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("is-open");
    });
});


// // ejemplo para ocultar los otros items abiertos al abrir uno
// headers.forEach(header => {
//     header.addEventListener("click", () => {
//         const currentItem = header.parentElement;
//         document
//             .querySelectorAll(".accordion-item.is-open")
//             .forEach(item => {
//                 if (item !== currentItem) {
//                     item.classList.remove("is-open");
//                 }
//             });
//         currentItem.classList.toggle("is-open");
//     });

// });