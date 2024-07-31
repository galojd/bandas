//PROMESAS

import { getHeroe } from "./bases/08-imp-exp";

//resolve es la respuesta, reject es error
/*const promesa = new Promise((resolve,reject) =>{

    setTimeout(() => {
        const heroe = getHeroe(7);
        if(heroe){
            resolve(heroe);
        }else{
            reject('heroe no encontrado');
        }
        

    },2000)
});

promesa.then((hero) => {
    console.log('Su superheroe es' , hero)
}).catch(err => console.warn(err));*/

const getHeroeByIdAsync = (id) => {
    
    return new Promise((resolve,reject) =>{

        setTimeout(() => {
            const heroe = getHeroe(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('heroe no encontrado');
            }
            
    
        },2000)
    });
    
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);