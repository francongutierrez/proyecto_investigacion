// Modo oscuro y almacenamiento en localStorage
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".dark-mode-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const navlinks = document.querySelectorAll(".nav-link");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            navbar.classList.toggle("dark-mode");
            navlinks.forEach(function(navlink) {
                navlink.classList.toggle("dark-mode");
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
        navbar.classList.add("dark-mode");
        navlinks.forEach(function(navlink) {
            navlink.classList.add("dark-mode");
        });
    }
});


document.querySelectorAll('.dark-mode-toggle').forEach(button => {
    button.addEventListener('click', function() {
        var icon = this.querySelector('i');
        if (icon.classList.contains('fa-moon')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            icon.title = 'Modo luminoso';
            this.title = 'Modo luminoso'; 
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            icon.title = 'Modo nocturno';
            this.title = 'Modo nocturno';
        }
    });
});






