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
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            <h3>${movie.title}</h3>
        `;

        // Добавляем постер в контейнер
        container.appendChild(movieDiv);
    });
}

// Используем правильный raw URL для доступа к JSON файлу на GitHub
const URL = "https://raw.githubusercontent.com/NATESSIMA/natessima.github.io/main/main/database/movies-250.json";

// Выполняем запрос fetch
fetch(URL)
    .then(response => {
        // Проверяем, если ответ успешный (status 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Преобразуем ответ в JSON
        return response.json();
    })
    .then(data => {
        // Выводим данные в консоль (или обрабатываем их)
        createPosters(data)
    })
    .catch(error => {
        // Ловим ошибки (например, если нет соединения или проблемы с запросом)
        console.error('Ошибка при загрузке данных:', error);
    });