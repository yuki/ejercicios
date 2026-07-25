let alumno1 = {
  nombre: "Ivan",
  edad: 20,
  direccion: {
    ciudad: "Bilbao"
  }
};
let alumno2 = {...alumno1};
console.log(alumno1 === alumno2);
alumno1.edad = 35;
alumno1.direccion.ciudad = "Vitoria";
console.log(alumno1);
console.log(alumno2);
console.log(alumno1 === alumno2);
// el objeto dirección es el mismo
console.log(alumno1.direccion === alumno2.direccion);

alumno1 = {
  nombre: "Alice",
  edad: 20,
  direccion: {
    ciudad: "Bilbao"
  }
};

alumno2 = Object.assign({}, alumno1);
alumno1.edad = 35;
alumno1.direccion.ciudad = "Vitoria";
console.log(alumno1);
console.log(alumno2);
console.log(alumno1 === alumno2);
// el objeto dirección es el mismo
console.log(alumno1.direccion === alumno2.direccion);