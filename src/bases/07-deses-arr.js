//DESTRUCTURACION
//ASIGNACION DESESTRUCTURANTE

const personajes = ['Goku', 'Vegeta', 'Trunks'];
//las comas con espacios vacios indican que quiero que lo ignore 
const [ , , p3] = personajes;

console.log(p3);

const RetornaArreglo = () => ['ABC',123];
const [Letras, Numeros] = RetornaArreglo();
console.log(Letras,Numeros);

const UseNombre = (valor) => {
    return [valor, () => {console.log('Hola mundo')}]
}

const [nombre, setNombre] = UseNombre('Goku');
console.log(nombre);
setNombre();

const arrPersonajes = [
    {id: 1, nombre: 'Goku', power: 'Unlimited'}, // índice 0 en el array
    {id: 2, nombre: 'Krilin', power: 'Deadly'}, // índice 1 en el array
  ];
const {1: krilinPj = {}} = arrPersonajes;
const {0: gokuPj = {}} = arrPersonajes;
const {power} = krilinPj;
console.log(krilinPj);
console.log(gokuPj);
console.log(power);


const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];
  
  for (const {
    name: n,
    family: { father: f },
    age: a,
  } of people) {
    console.log("Nombre: " + n + ", Padre: " + f + ", Edad: " + a);
  }

  //Se puede convinar la desestructuracion de arreglos y objetos
  const props = [
    { id: 1, nombre1: "Esto" },
    { id: 2, nombre1: "es una" },
    { id: 3, nombre1: "prueba" },
  ];
  
  const [, , {nombre1}] = props;
  
  console.log(nombre1); // "prueba"
  