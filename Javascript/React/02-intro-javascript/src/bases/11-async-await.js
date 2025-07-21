// Función asíncrona usando async/await
const getImagen = async () => {

    try {
        const apiKey = 'l5vH2RNHAerD4vGRWWIfjYffUehdzCtP'; // API Key de Giphy
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // Petición HTTP, espera la respuesta
        const {data} = await respuesta.json(); // Convertir a JSON y desestructurar, espera la data
        const {url} = data.images.original; // Extraer URL de la imagen
        
        // Crear elemento img y agregarlo al DOM
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        console.error(error); // Manejo de errores con try-catch
    }
    
}

// Llamar la función asíncrona
getImagen()
    .catch(console.warn); // Catch adicional por si falla
