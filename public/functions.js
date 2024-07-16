// Modo oscuro y almacenamiento en localStorage
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const navlinks = document.querySelectorAll(".nav-link");


    toggleButton.addEventListener("click", function() {
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

    // Cargar la preferencia del usuario desde localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        navbar.classList.add("dark-mode");
        navlinks.forEach(function(navlink) {
            navlink.classList.add("dark-mode");
        });
    }
});

// Usando JavaScript puro
document.getElementById('darkModeButton').addEventListener('click', function() {
    var icon = this.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        this.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
});





