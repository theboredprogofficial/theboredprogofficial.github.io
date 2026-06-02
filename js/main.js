document.addEventListener('DOMContentLoaded', function() {
    
    // Funzione per caricare header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.log('Header load error:', error));
    
    // Funzione per caricare footer (prima della chiusura di body)
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.log('Footer load error:', error));
});