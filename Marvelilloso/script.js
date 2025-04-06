
document.addEventListener("DOMContentLoaded", () => {
    const favoritosContainer = document.querySelector(".favoritos .track");
    const watchLaterButtons = document.querySelectorAll(".btn-addfavorites");

    watchLaterButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".movie-card, .series-card");
            const button = event.target;

            if (card) {
                toggleFavorite(card, button);
            }
        });
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
});

