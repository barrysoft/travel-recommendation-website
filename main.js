// Fetch and display destinations
async function fetchDestinations() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        const data = await response.json();
        console.log('Fetched data:', data); // Debug log
        displayDestinations(data);
    } catch (error) {
        console.error('Error fetching destinations:', error);
        document.getElementById('destinationsGrid').innerHTML = 
            '<p class="error">Failed to load destinations. Please try again later.</p>';
    }
}

function displayDestinations(data) {
    const grid = document.getElementById('destinationsGrid');
    let html = '';

    // Display countries and cities
    data.countries.forEach(country => {
        country.cities.forEach(city => {
            html += createDestinationCard(city);
        });
    });

    // Display temples
    data.temples.forEach(temple => {
        html += createDestinationCard(temple);
    });

    // Display beaches
    data.beaches.forEach(beach => {
        html += createDestinationCard(beach);
    });

    grid.innerHTML = html;
}

function createDestinationCard(destination) {
    return `
        <div class="destination-card">
            <img src="${destination.imageUrl}" alt="${destination.name}" class="destination-image">
            <div class="destination-content">
                <h3 class="destination-title">${destination.name}</h3>
                <p class="destination-description">${destination.description}</p>
                <a href="#" class="visit-btn">Visit Now</a>
            </div>
        </div>
    `;
}

// Search functionality
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.destination-card');

    cards.forEach(card => {
        const title = card.querySelector('.destination-title').textContent.toLowerCase();
        const description = card.querySelector('.destination-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function handleClear() {
    document.getElementById('searchInput').value = '';
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => card.style.display = 'block');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    fetchDestinations();
});

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Ici vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log('Formulaire soumis:', { name, email, message });
    
    // Réinitialiser le formulaire
    event.target.reset();
    alert('Message envoyé avec succès!');
}
