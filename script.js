
document.addEventListener("DOMContentLoaded", () => {
    const favoritosContainer = document.querySelector(".favoritos .track");
    document.getElementById('movie-track').addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains('btn-addfavorites')) {
            const card = event.target.closest(".movie-card");
            if (card) {
                toggleFavorite(card, event.target);
            }
        }
    });

    document.getElementById('movie-track2').addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains('btn-addfavorites')) {
            const card = event.target.closest(".movie-card");
            if (card) {
                toggleFavorite(card, event.target);
            }
        }
    });

    document.getElementById('series-track').addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains('btn-addfavorites')) {
            const card = event.target.closest(".series-card");
            if (card) {
                toggleFavorite(card, event.target);
            }
        }
    });

    function toggleFavorite(card, button) {
        const title = card.querySelector(".card-overlay p").textContent;
        const existingCards = [...favoritosContainer.querySelectorAll(".movie-card, .series-card")];
        const existingTitles = existingCards.map(c => c.querySelector(".card-overlay p").textContent);

        const isAlreadyFavorite = existingTitles.includes(title);

        if (isAlreadyFavorite) {
            // Eliminar de favoritos
            const cardToRemove = existingCards.find(c => c.querySelector(".card-overlay p").textContent === title);
            if (cardToRemove) {
                favoritosContainer.removeChild(cardToRemove);
                button.textContent = "Agregar a favoritos";
            }
        } else {
            // Agregar a favoritos
            const clonedCard = card.cloneNode(true);
            const clonedButton = clonedCard.querySelector(".btn-addfavorites");
            if (clonedButton) {
                clonedButton.textContent = "Eliminar de favoritos";
                clonedButton.addEventListener("click", () => {
                    favoritosContainer.removeChild(clonedCard);

                    const originalButton = findOriginalButton(title);
                    if (originalButton) {
                        originalButton.textContent = "Agregar a favoritos";
                    }
                });
            }

            favoritosContainer.appendChild(clonedCard);
            button.textContent = "Eliminar de favoritos";
        }
    }

    function findOriginalButton(title) {
        const cards = document.querySelectorAll(".movie-card, .series-card");
        for (let card of cards) {
            const cardTitle = card.querySelector(".card-overlay p")?.textContent;
            if (cardTitle === title) {
                return card.querySelector(".btn-addfavorites");
            }
        }
        return null;
    }

    
    fetch('movies1.json')
        .then(response => response.json())
        .then(data => {
            const movieTrack = document.getElementById('movie-track');
            data.movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.alt}">
                    <div class="card-overlay">
                        <p>${movie.title}</p>
                        <button class="btn-watch">Ver ahora</button>
                        <button class="btn-addfavorites">Agregar a favoritos</button>
                    </div>
                `;
                movieTrack.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error al cargar las películas 1:', error));

    
    fetch('movies2.json')
        .then(response => response.json())
        .then(data => {
            const movieTrack2 = document.getElementById('movie-track2');
            data.movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.alt}">
                    <div class="card-overlay">
                        <p>${movie.title}</p>
                        <button class="btn-watch">Ver ahora</button>
                        <button class="btn-addfavorites">Agregar a favoritos</button>
                    </div>
                `;
                movieTrack2.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error al cargar las películas 2:', error));

    
    fetch('mcu_series.json')
        .then(response => response.json())
        .then(data => {
            const seriesTrack = document.getElementById('series-track');
            data.series.forEach(serie => {
                const seriesCard = document.createElement('div');
                seriesCard.classList.add('series-card');
                seriesCard.innerHTML = `
                    <img src="${serie.image}" alt="${serie.alt}">
                    <div class="card-overlay">
                        <p>${serie.title}</p>
                        <button class="btn-watch">Ver ahora</button>
                        <button class="btn-addfavorites">Agregar a favoritos</button>
                    </div>
                `;
                seriesTrack.appendChild(seriesCard);
            });
        })
        .catch(error => console.error('Error al cargar las series:', error));
});

    document.querySelectorAll(".scroll-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const track = document.getElementById(targetId);
            const scrollAmount = 300;
            if (btn.classList.contains("left")) {
                track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                track.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });
