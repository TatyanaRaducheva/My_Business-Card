document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    });  

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        // Меняем иконку меню
        const icon = menuToggle.querySelector('i');
        if(navMenu.classList.contains('show')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-menu a');
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            document.querySelector('.menu-toggle i').className = 'fas fa-bars';
    });