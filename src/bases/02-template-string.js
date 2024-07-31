const nombre = 'Jose';
const Apellido = 'Dios';

//const nombrecompleto = nombre + " " + Apellido;
//esas comillas se llaman backtips se hacen con alt + 96
//El codigo de abajo permite mostrar con salto de linea, TemplateString
const nombrecompleto = `
${ nombre } 
${ Apellido }
${ 1 + 1 }
`;

console.log(nombrecompleto);

function getSaludo(nombre){
    return"Hola "+ nombre;
}

console.log(`Este es un texto : ${getSaludo(nombre)}`);