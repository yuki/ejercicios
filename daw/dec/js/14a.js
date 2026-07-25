class Alumno {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
}

const alumno1 = new Alumno("Alice", 20);

const alumno2 = new Alumno("Bob",25);

alumno1.saludar();
alumno1.nombre = "Carol";
alumno1.saludar();
console.log(alumno1);
alumno2.saludar();