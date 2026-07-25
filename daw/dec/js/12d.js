const alumno1 = {
    nombre: "Grace",
    edad: 20
};

const alumno2 = alumno1;

alumno2.nombre = "Alice";

console.log(alumno2);
console.log(alumno1);
console.log(alumno1===alumno2);