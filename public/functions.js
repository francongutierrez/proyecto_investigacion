document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".dark-mode-toggle");
    const body = document.body;
    const footer = document.querySelector("footer");  // Corregido
    const navbar = document.querySelector(".navbar");
    const navlinks = document.querySelectorAll(".nav-link");
    const cards = document.querySelectorAll(".card");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            navbar.classList.toggle("dark-mode");
            footer.classList.toggle("dark-mode");
            navlinks.forEach(function(navlink) {
                navlink.classList.toggle("dark-mode");
            });
            cards.forEach(function(card) {
                card.classList.toggle("dark-mode");
            });

            // Guardar la preferencia del usuario en localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    });

    // Cargar la preferencia del usuario desde localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        footer.classList.add("dark-mode");
        navbar.classList.add("dark-mode");
        navlinks.forEach(function(navlink) {
            navlink.classList.add("dark-mode");
        });
        cards.forEach(function(card) {
            card.classList.add("dark-mode");
        });
    }
});

document.querySelectorAll('.dark-mode-toggle').forEach(button => {
    button.addEventListener('click', function() {
        var icon = this.querySelector('i');
        if (icon.classList.contains('fa-moon')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            this.classList.add('light-mode'); // Añadir clase para modo luminoso
            icon.title = 'Modo luminoso';
            this.title = 'Modo luminoso'; 
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            this.classList.remove('light-mode'); // Remover clase para modo luminoso
            icon.title = 'Modo nocturno';
            this.title = 'Modo nocturno';
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInDown');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const h2s = document.querySelectorAll('h2.animated');
    h2s.forEach(h2 => {
        observer.observe(h2);
    });
});

