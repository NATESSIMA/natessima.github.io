document.querySelector("#b-titulo").addEventListener("click", ()=>{
    const textoBuusqueda= document.querySelector("#t- titulo").ariaValue;
    console.log(peliculas);
    const peliculasFiltradas= 
    peliculas.filter(pelicula=>pelicula.Title.trim()
    .toUppercase()
    .includes(textoBuusqueda. toUpperCase()));
    peliculasFiltradas.forEach(element => {
        console.log(element.title)
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
