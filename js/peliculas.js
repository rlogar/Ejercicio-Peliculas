const URL_IMG = "https://image.tmdb.org/t/p/w500";
div_popu = document.querySelector("#container-populares");
div_cartelera = document.querySelector("#container-cartelera");
div_estrenos = document.querySelector("#container-estrenos");
//div_top = document.querySelector("#container-top");

//leemos populares
const RecogePopulares = async () =>{
    let populares = "https://api.themoviedb.org/3/movie/popular?api_key=24b37e513df8dcb28d9c9e0abc3f5682";
    const popular = await fetch(populares);
    const data = await popular.json();
    console.log(data);

    div_popu.innerHTML ="";

    data.results.map(item =>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="pelicula">
            <img class="imPeliTop" src="${URL_IMG+item.poster_path}" alt="...">
            <div class="titulo">
                <h2 class="titulo pelicula>${item.original_tittle}</h2>
            </div>
        </div>
        `
    }
    );
}

//leemos populares
const RecogeCartelera = async () =>{
    let populares = "https://api.themoviedb.org/3/movie/now_playing?api_key=24b37e513df8dcb28d9c9e0abc3f5682";
    const popular = await fetch(populares);
    const data = await popular.json();
    console.log(data);

    div_cartelera.innerHTML ="";

    data.results.map(item =>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="pelicula">
            <img class="imPeliTop" src="${URL_IMG+item.poster_path}" alt="...">
            <div class="titulo">
                <h2 class="titulo pelicula>${item.original_tittle}</h2>
            </div>
        </div>
        `
    }
    );
}

//leemos populares
const RecogeEstrenos = async () =>{
    let populares = "https://api.themoviedb.org/3/movie/upcoming?api_key=24b37e513df8dcb28d9c9e0abc3f5682";
    const popular = await fetch(populares);
    const data = await popular.json();
    console.log(data);

    div_estrenos.innerHTML ="";

    data.results.map(item =>{
        divItem = document.createElement('div');
        divItem.innerHTML = `
        <div class="pelicula">
            <img class="imPeliTop" src="${URL_IMG+item.poster_path}" alt="...">
            <div class="titulo">
                <h2 class="titulo pelicula>${item.original_tittle}</h2>
            </div>
        </div>
        `
    }
    );
}

RecogePopulares();