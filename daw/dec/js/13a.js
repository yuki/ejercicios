const datos = [10, 20, "treinta"];
datos[2]=30;
console.log(datos.length);
console.log(datos[0]);
console.log(datos[datos.length-1]);


for (let i=0; i<datos.length; i++) {
  console.log(datos[i]);
}

for (const dato of datos) {
  console.log(dato);
}