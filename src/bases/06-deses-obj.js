//DESTRUCTURACION
//ASIGNACION DESESTRUCTURANTE

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}
//se puede asignar un nombre a los valores del objeto en este caso nombre1 
//const {nombre:nombre1} = persona;
//const {nombre,edad,clave} = persona;

/*const retornaPersona = (usuario) => {
    const {edad,nombre,clave} = usuario;
    console.log(edad,nombre,clave);
};*/

/*const retornaPersona = ({nombre, edad, rango = 'capitan'}) => {
    console.log(nombre,edad,rango);
};*/

const Contexto = ({clave, edad}) => ({
    nombreclave : clave,
    anios: edad,
    latlng : {
        lat : 14.007,
        lng : -74.895
    }
});
//otra forma es desestructurar latlng
const {nombreclave, anios, latlng: {lat,lng}}  = Contexto(persona);
// const {lat, lng}  = latlng;
console.log(nombreclave,anios,lat,lng);