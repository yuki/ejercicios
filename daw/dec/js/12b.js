const alumno = {
  nombre: "Alice",
  apellido: "Doe",
  edad: 20,
  direccion: {
    ciudad: "Bilbao",
    calle: "una",
    numero: 666,
    cp: 48123
  }
};

for (const [propiedad, valor] of Object.entries(alumno)) {
    console.log(propiedad, valor);
}