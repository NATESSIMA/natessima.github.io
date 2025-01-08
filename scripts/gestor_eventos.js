document.querySelector("#b-titulo").addEventListener("click", ()=>{
    const textoBuusqueda= document.querySelector("#b- titulo").ariaValue;
    console.log(peliculas);
    const peliculasFiltradas= 
    peliculas.filter(pelicula=>pelicula.Title.trim()
    .toUppercase()
    .includes(textoBuusqueda. toUpperCase()));
peliculasFiltradas.map(generateCard);
});

document.querySelector("#b-actor").addEventListener("click", ()=>{
    const textoBuusqueda= document.querySelector("#t- actor").Value;
    console.log(peliculas);
    const peliculasFiltradas= 
    peliculas.filter(pelicula=>pelicula.Actor.trim()
    .toUppercase(Actor)
    .includes(textoBuusqueda. toUpperCase()));
peliculasFiltradas.map(generateCard);

});

document.querySelector("#b-actor").addEventListener("click", ()=>{
    const textoBuusqueda= document.querySelector("#t- actor").Value;
    console.log(peliculas);
    const peliculasFiltradas= 
    peliculas.filter(pelicula=>pelicula.Actor.trim()
    .toUppercase(Actor)
    .includes(textoBuusqueda. toUpperCase()));
peliculasFiltradas.map(generateCard);



    peliculasFiltradas.forEach(element => {
        console.log(element.Title)
    });
});
    let peliculas;
    function generateCard(pelicula){

    };
    function searchMovieByActor (actorName){
        console.log('pelicula con actor:${actorNam}');
        const peliculasFiltradas= 
        peliculas.filter(element=>pelicula.actorName.trim()
        .toUppercase()
        .includes(textoBuusqueda. toUpperCase()));
        peliculasFiltradas.forEach(actorName => {generateCard
        } );  
    }
    function filterMoviesByGenre(movies,genre){
        return movies.filter(movie=>movie.genre.toLowerCase().includes(genre.toLowerCase()));
    }
      
        document.getElementByIDd('searchButton').addEventListener('click',()=>{
const genreInput =document.getElementById('genreInput').value ;
getMovies(movies=>{
    const filteredMovies=(filteredMovies);
    displayMovies(filteredMovies);
})
        })


document.addEventListener("DOMContentLoaded", () => {
    const filterInputs = document.querySelectorAll(".filter-input");
    const peliculasContainer = document.getElementById("peliculasContainer");

    const renderPeliculas = (peliculasFiltradas) => {
        peliculasContainer.innerHTML = "";
        if (peliculasFiltradas.length === 0) {
            peliculasContainer.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }
        peliculasFiltradas.forEach((pelicula) => {
            const div = document.createElement("div");
            div.classList.add("pelicula");
            div.innerHTML = `
                <h3>${pelicula.titulo}</h3>
                <p><strong>Año:</strong>${pelicula.año}</p>
                <p><strong>Actor:</strong>${pelicula.actor}</p>
                <p><strong>Género:</strong>${pelicula.genero}</p>
            `;
            peliculasContainer.appendChild(div);
        });
    };

    const filtrarPeliculas = () => {
        let peliculasFiltradas = peliculas;

        filterInputs.forEach((input) => {
            const filterType = input.dataset.filter;
            const filterValue = input.value.trim().toLowerCase();

            if (filterValue) {
                peliculasFiltradas = peliculasFiltradas.filter((pelicula) =>
                    pelicula[filterType]?.toString().toLowerCase().includes(filterValue)
                );
            }
        });

        renderPeliculas(peliculasFiltradas);
    };

    filterInputs.forEach((input) => {
        input.addEventListener("input", filtrarPeliculas);
    });

    // Mostrar todas las películas al cargar
    renderPeliculas(peliculas);
});
