//FUNCIONES
/*function saludar(nombre){
    return `hola, ${nombre}`;
}

const saludar1 = function saludar(nombre){
    return `hola, ${nombre}`;
}*/

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => 'Hola mundo';

console.log(saludar2('Jose'));
console.log(saludar3('Edgardo'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'galojd'
});

const user = getUser();

console.log(user);

function getUsuarioActivo (nombre){
    return {
        uid: 'ABC124',
        username: nombre          
    }
}

const getUsuarioActivo1 = (nombre) => ({
        uid: 'ABC125',
        username: nombre  
}
);

const getUsuarioActivo2 = (nombre) => {
    return ({
        uid: 'ABC126',
        username: nombre 
    });
}
const usuarioactivo1 = getUsuarioActivo1('Pedro');
const usuarioactivo2 = getUsuarioActivo2('Pablito');
const usuarioactivo = getUsuarioActivo('Ersa');
console.log(usuarioactivo);
console.log(usuarioactivo1);
console.log(usuarioactivo2);