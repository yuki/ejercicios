const alumno = {
  nombre: "Alice",
  apellido: "Doe",
  edad: 20,
  direccion: {
    ciudad: "Bilbao",
    calle: "una",
    numero: 666,
    cp: 48123
  },
  saludar() {
    console.log(`${this.nombre} vive en ${this.direccion.ciudad}`)
  }
};

alumno.saludar();