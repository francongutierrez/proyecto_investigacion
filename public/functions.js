// Modo oscuro y almacenamiento en localStorage
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

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
    }
});