
// Petit script pour gérer le clic fluide sur les liens (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pour plus tard : ici tu pourras ajouter la logique d'un menu déroulant sur mobile !
