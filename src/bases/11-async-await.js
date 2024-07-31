
// const getImagenPromesa = () => new Promise(resolve => resolve('www.imagen.com'));
// getImagenPromesa().then(console.log);
//esta es la version de la de arriba aplicacndo async
// const getImagen = async () => {
//     return await 'www.imagen.com';
// }
// getImagen().then(console.log);

const getImagen = async () => {
    try{
        const apikey = 'a2bFLJyssRG1n4fYY5mEbkmSFZ63TPlj';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const{data} = await resp.json();
        const {url} = data.images.preview_gif;
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    }catch(ex){
        console.error(ex);
    }
    
}

getImagen();
