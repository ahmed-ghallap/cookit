// Select all elements containing the stars
const starContainers = document.querySelectorAll('.comment .stars');

starContainers.forEach(container => {
    // Get the rating value from the data attribute
    let rating = parseInt(container.getAttribute('data-rating'), 10);
    if (isNaN(rating) || rating < 1) {
        rating = 1; // Set to minimum if invalid or less than 1
    } else if (rating > 5) {
        rating = 5; // Set to maximum if greater than 5
    }

    // Clear the container content
    container.innerHTML = '';

    // Loop to create the star icons
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        // Add the appropriate class based on the rating
        if (i <= rating) {
            star.className = 'fa-solid fa-star fa-xl';
        } else {
            star.className = 'fa-regular fa-star fa-xl';
        }
        container.appendChild(star);
    }
});
