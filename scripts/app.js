// Предположим, что переменная `movies` содержит данные о фильмах, полученные через fetch.
function createPosters(movies) {
    console.log(movies)
    const container = document.getElementById('peliculasContainer'); // Контейнер, в котором будут отображаться постеры.
    container.innerHTML = ''; // Очистим контейнер перед добавлением новых постеров.

    // Для каждого фильма создаем постер.
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'pelicula'; // Класс для каждого постера

        // Создаем постер фильма с изображением
        movieDiv.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
            <h3>${movie.Title}</h3>
        `;

        // Добавляем постер в контейнер
        container.appendChild(movieDiv);
    });
}
function procerMovie(data){
    peliculas=data.movies;
};

   

    
// Используем правильный raw URL для доступа к JSON файлу на GitHub