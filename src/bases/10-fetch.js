//  https://api.giphy.com/v1/gifs/random?api_key=a2bFLJyssRG1n4fYY5mEbkmSFZ63TPlj
const apikey = 'a2bFLJyssRG1n4fYY5mEbkmSFZ63TPlj';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        //console.log(data.images.preview_gif.url)
        //se extrajo url con desestructuración
        const {url} = data.images.preview_gif;

        const img = document.createElement('img')
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);
