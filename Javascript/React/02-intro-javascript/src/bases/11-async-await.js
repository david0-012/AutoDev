const getImagen = async () => {

    try {
        const apiKey = 'l5vH2RNHAerD4vGRWWIfjYffUehdzCtP';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        console.error(error);
    }
    
}

getImagen()
    .catch(console.warn);
