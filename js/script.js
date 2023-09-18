document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento de clic a la diapositiva principal
    document.querySelector(".slide-1").addEventListener("click", function () {
        // Cambia la clase activa para mostrar las subdiapositivas
        this.classList.toggle("active");
    });
});
