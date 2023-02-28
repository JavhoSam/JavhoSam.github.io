const url = 'https://store.steampowered.com/api/appdetails?appids=';

function Enviar(){
var juego = document.getElementById("Textbox").value
AgregarJuegos();
}

async function ObtenerJuegos(){
var Promesa = juego((game) => {
    return fetch(url + juego)
    .then((response) => response.json())
    .then((data) => data[game].data)
    .catch((error) => console.log(error));
});

return Promise.all(Promesa);
}


async function AgregarJuegos(){
const juego = await ObtenerJuegos();

juego.forEach(game => {
    const juegoDiv = document.createElement('div');
    const titulo = document.createElement('h2');
    const descripcion = document.createElement('p');
    const imagen = document.createElement('img');
    
    titulo.innerText = juego.name;
    descripcion.innerText = juego.short_description;
    imagen.src = juego.header_image;

    juegoDiv.appendChild(titulo);
    juegoDiv.appendChild(descripcion);
    juegoDiv.appendChild(imagen);

    document.getElementById('Zona').appendChild(juegoDiv);
});


}




