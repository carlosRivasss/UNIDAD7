window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible');
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll('nav ul li a');
    // Añadir event listeners
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            this.classList.toggle('btn-active');
        });
    });
});
