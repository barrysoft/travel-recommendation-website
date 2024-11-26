
const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);

function search() {
    const searchTerm = document.getElementById('searchInput').value;
    console.log('Recherche pour:', searchTerm);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    console.log('Recherche effacée');
}

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
