const alumno = {
  nombre: "Alice",
  edad: 20,
  direccion: {
    ciudad: "Bilbao",
    calle: "una",
  }
};
alumno.direccion.calle = "gran vía";
alumno.direccion.cp = 48023;
delete alumno.direccion.ciudad;

// recorrer propiedades
for (const propiedad in alumno) {
  console.log(propiedad);
  console.log(alumno[propiedad]);
}

// recorrer propiedades con keys
for (const propiedad of Object.keys(alumno)) {
  console.log(propiedad);
  console.log(alumno[propiedad]);
}