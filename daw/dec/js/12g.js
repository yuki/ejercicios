let alumno1 = {
  nombre: "Bob",
  edad: 20,
  direccion: {
    ciudad: "Bilbao"
  }
};
let alumno2 = structuredClone(alumno1);
console.log(alumno1 === alumno2);
alumno1.edad = 35;
alumno1.direccion.ciudad = "Vitoria";
console.log(alumno1);
console.log(alumno2);
console.log(alumno1 === alumno2);
console.log(alumno1.direccion === alumno2.direccion);
