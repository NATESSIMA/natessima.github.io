// Выполняем запрос fetch\
function doGetRequest(url, processData) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error));
}

/*
//24-29
document.addEventListener("DOMContentLoaded", () => {
    const actorInput = document.querySelector("#t-actor").value; // Поле ввода для актёра
    const genreSelect = document.querySelector("#s-genero"); // Выпадающий список для жанра
    const container = document.querySelector("#container"); // Контейнер для карточек
    const URL = "https://api.example.com/movies"; // Замените на URL вашего API

    if (actorInput && genreSelect) {
        actorInput.addEventListener("input", () => {
            const actorName = actorInput.value.trim();
            const genre = genreSelect.value;
            if (actorName || genre) {
                searchMovies(actorName, genre); // Ищем фильмы по имени актера или жанру
            } else {
                clearMovies(); // Очищаем контейнер, если поля ввода пустые
            }
        });

        genreSelect.addEventListener("change", () => {
            const actorName = actorInput.value.trim();
            const genre = genreSelect.value;
            if (actorName || genre) {
                searchMovies(actorName, genre); // Ищем фильмы по имени актера или жанру
            } else {
                clearMovies(); // Очищаем контейнер, если поля ввода пустые
            }
        });
    }

    // Функция поиска фильмов по актеру и жанру
    function searchMovies(actorName, genre) {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error: " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const peliculas = data.movies || []; // Предполагаем, что данные приходят с полем `movies`
                const peliculasFiltradas = peliculas.filter(pelicula => {
                    // Фильтрация по имени актера и жанру
                    const actorMatch = actorName ? pelicula.Actors.toLowerCase().includes(actorName.toLowerCase()) : true;
                    const genreMatch = genre ? pelicula.Genre.toLowerCase().includes(genre.toLowerCase()) : true;
                    return actorMatch && genreMatch; // Возвращаем фильм, если совпадают оба критерия
                });

                clearMovies(); // Очистка контейнера перед добавлением новых карточек

                if (peliculasFiltradas.length > 0) {
                    peliculasFiltradas.forEach(pelicula => {
                        generateCard(pelicula); // Генерация карточек
                    });
                } else {
                    container.innerHTML = "<p>No se encontraron películas con ese actor o género.</p>";
                }
            })
            .catch(error => {
                console.error("no responde:", error);
                container.innerHTML = "<p>no responde</p>";
            });
    }

    // Функция для очистки контейнера
    function clearMovies() {
        container.innerHTML = ""; // Очистка контейнера
    }

    // Функция для генерации карточек (псевдокод)
    function generateCard(pelicula) {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <h3>${pelicula.Title}</h3>
            <p>${pelicula.Actors}</p>
            <p>${pelicula.Genre}</p>
        `;
        container.appendChild(card);
    }
}); */