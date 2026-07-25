class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Alumno extends Persona {

    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    estudiar() {
        console.log(`Soy ${this.nombre} y estudio ${this.curso}.`);
    }
}



const alumno = new Alumno(
    "John",20,"2º DAW"
);


alumno.saludar();
alumno.estudiar();