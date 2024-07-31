//Aqui se muestra como se importa por default e importacion normal
//import heroes, { masfamosos } from "../data/heroes";
import heroes from "../data/heroes";

const getHeroe = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroeByOrner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

/*console.log(masfamosos)
console.log(getHeroe(2));
console.log(getHeroeByOrner('DC'));
console.log(getHeroeByOrner('Marvel'));*/

export {
    getHeroe,
    getHeroeByOrner
}