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
    saludar() {
        super.saludar();
        console.log("Soy alumno.");
    }
}


class Profesor extends Persona {

    saludar() {
        super.saludar();
        console.log("Soy profesor.");
    }
}


const persona = new Persona(
    "Alice",20
);

const alumno = new Alumno(
    "Bob",20,"2º DAW"
);

const profesor = new Profesor(
    "Charlie",20,"2º DAW"
);



persona.saludar();
alumno.saludar();
profesor.saludar();