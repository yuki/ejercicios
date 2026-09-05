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
  },
  prueba: ()=> {
    console.log("Hola desde arrow-function");
    console.log(`${this.nombre}`);
  }
};

alumno.prueba();
