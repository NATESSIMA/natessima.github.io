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
