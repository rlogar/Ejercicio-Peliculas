let URL_IMG = "https://image.tmdb.org/t/p/w500";
let filtro = "day";

const div_popu = document.getElementById("container-populares");
const div_cartelera = document.getElementById("container-catelera");
const div_estrenos = document.getElementById("container-estrenos");

console.log(div_popu);
console.log(div_cartelera);
console.log(div_estrenos);

const selectStatus = document.querySelector('.filtrado');


//leemos populares
const recogePopulares = async () =>{
    let populares_url = "https://api.themoviedb.org/3/movie/popular?api_key=24b37e513df8dcb28d9c9e0abc3f5682";
    const popular = await fetch(populares_url);
    const data = await popular.json();

    div_popu.innerHTML ="";

    data.results.map(item =>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="pelicula">
                <h5 class="titulo">${item.original_title}</h5>
                <img class="imgPopulares" src="${URL_IMG+item.poster_path}">
        </div>
        `
        
    div_popu.appendChild(divItem);
    }
    );
    
}

const recogeFiltro =(value) =>{
    filtro = value;
}

//leemos tendencias
const recogeTendencias = async (filtro) =>{
    let tendencias_url = `https://api.themoviedb.org/3/trending/all/${filtro}?api_key=24b37e513df8dcb28d9c9e0abc3f5682`;
    const tendencia = await fetch(tendencias_url);
    const data = await tendencia.json();

    div_cartelera.innerHTML = "";

    data.results.map(item =>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="pelicula">
                <h5 class="titulo">${item.original_title}</h5>
                <img class="imgPopulares" src="${URL_IMG+item.poster_path}">
        </div>
        `
    div_cartelera.appendChild(divItem);
    }
    );
    
}

selectStatus.addEventListener('change', (event) => {
    recogeTendencias(event.target.value);
});

recogePopulares();