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
        data = data.movies;
        createPosters(data)
    })
    .catch(error => {
        // Ловим ошибки (например, если нет соединения или проблемы с запросом)
        console.error('Ошибка при загрузке данных:', error);
    });