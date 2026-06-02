document.addEventListener('DOMContentLoaded', function() {
    
    // Carica header SOLO se non esiste già
    if (!document.querySelector('header')) {
        fetch('/components/header.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);
            })
            .catch(error => console.log('Header load error:', error));
    }
    
    // Carica footer SOLO se non esiste già
    if (!document.querySelector('footer')) {
        fetch('/components/footer.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data);
            })
            .catch(error => console.log('Footer load error:', error));
    }
});