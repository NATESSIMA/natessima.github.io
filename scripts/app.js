const url = 'https://github.com/NATESSIMA/natessima.github.io/blob/main/main/database/movies-250.json';
function generateCard(pelicula){

const nuevaCard= document.createElement("div");//crea un elemento 
const nuevaIMG= document.createElement("img");
nuevaIMG.setAttribute("src", pelicula.Poster);
nuevaIMG.setAttribute("alt", `Poster de la pelicula ${pelicula.Title}`);

const nuevoContenido=document.createElement("div");
nuevaCard.appendChild(nuevaIMG);
nuevoContenido.setAttribute("class","card-content");
nuevaCard.appendChild(nuevoContenido);
nuevoTitulo.textContent=pelicula.Title;
nuevoContenido.appendChild(nuevoTitulo);

const nuevoParrafoDirector= document.createElement("p");
const nuevaNegrita=document.createElement("strong");
nuevoContenido.appendChild(nuevoParrafodirector)
nuevaCard.appendChild(nuevoParrafoDirector);
nuevoParrafoDirector.textContent=pelicula.Director;
nuevoContenido.appendChild()






    document.createElement("div");//crea un elemento de tipo div
     const peliculas =data. movies;
    for (let i=0;i<peliculas.length;i++){
        console.log("duracion:"+peliculas[i].Runtime);
    }
    peliculas.forEach(pelicula=>{
        console.log(pelicula.Title);
    });
    for (pelicula of peliculas)(
        console.log("director"+ pelicula.director));
    for (atributo in peliculas[0]){
        console.log(atributo,peliculas[0][atributo]);
    }
       peliculas.forEach(pelicula=>{
        generateCard(pelicula);
       })   
}

DocumentFragment(URL, processMovie);