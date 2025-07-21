const apiKey = 'l5vH2RNHAerD4vGRWWIfjYffUehdzCtP'; // API Key de Giphy

// Petición HTTP con fetch
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then(respuesta => respuesta.json()) // Convertir respuesta a JSON
    .then(({data}) =>{ // Desestructurar data del response
        const {url} = data.images.original; // Extraer URL de la imagen
        console.log(url); // Mostrar URL en consola

        // Crear elemento img y agregarlo al DOM
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn) // Manejo de errores