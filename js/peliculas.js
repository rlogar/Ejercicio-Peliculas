let URL_IMG = "https://image.tmdb.org/t/p/w500";
div_popu = document.querySelector("#container-populares");
div_cartelera = document.querySelector("#container-cartelera");
div_estrenos = document.querySelector("#container-estrenos");
//div_top = document.querySelector("#container-top");

//leemos populares
const recogePopulares = async () =>{
    let populares = "https://api.themoviedb.org/3/movie/popular?api_key=24b37e513df8dcb28d9c9e0abc3f5682";
    const popular = await fetch(populares);
    const data = await popular.json();
    console.log(data);

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
    
    
    console.log("fuera del bucle");
}


recogePopulares();