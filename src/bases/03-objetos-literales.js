const persona = {
    nombre : 'Tony',
    apellidos : 'Starck',
    edad : 45,
    direccion : {
        ciudad: 'Lima',
        zip: 78965412,
        lat: 12.4557,
        lng: 124.454451,
    }
};
//console.table(persona);

//como apuntan al mismo espacio en memoria los cambios se realizan a ambas
//const persona2 = persona;
//De esta forma se realiza una copia de los valores con las propiedades
const persona2 = {...persona};
persona2.nombre = 'Bruno';
persona2.apellidos = 'Bucharati'

console.log(persona);
console.log(persona2);