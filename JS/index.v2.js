/* Menú de barra de navegación */
// Obtenemos la referencia al elemento .container-dropdown-menu
const dropdownMenu = document.querySelector('.container-dropdown-menu');
    
// Obtenemos la referencia al elemento <a> dentro de .nav-links
const cargaTuCocheLink = document.querySelector('.nav-links li a');

// Agregamos un evento de mouseover al enlace "Carga tu coche"
cargaTuCocheLink.addEventListener('mouseover', () => {
    // Mostramos el menú dropdown al pasar el mouse sobre el enlace "Carga tu coche"
    dropdownMenu.style.display = 'flex';
});

// Agregamos un evento de mouseover al elemento .container-dropdown-menu
dropdownMenu.addEventListener('mouseover', () => {
    // Mostramos el menú dropdown al pasar el mouse sobre el div .container-dropdown-menu
    dropdownMenu.style.display = 'flex';
});

dropdownMenu.addEventListener('mouseout', () => {
    // Ocultamos el menú dropdown al sacar el mouse sobre el div .container-dropdown-menu
    dropdownMenu.style.display = 'none';
});

/* Dropdown menu */
document.addEventListener('DOMContentLoaded', () => {
    const dropdownMenu = document.querySelector('.container-dropdown-menu');
    const mobileNavbar = document.querySelector('.mobile-navbar'); // Navbar para resoluciones móviles

    if (window.innerWidth <= 600) {
        // Mostrar menú al pasar el ratón por encima de la barra de navegación
        mobileNavbar.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'flex';
        });

        // Ocultar menú al sacar el ratón de la barra de navegación
        mobileNavbar.addEventListener('mouseout', () => {
            dropdownMenu.style.display = 'none';
        });

        // Mostrar menú al pasar el ratón por encima del menú
        dropdownMenu.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'flex';
        });

        // Ocultar menú al sacar el ratón del menú
        dropdownMenu.addEventListener('mouseout', () => {
            dropdownMenu.style.display = 'none';
        });
    }
});/* END Dropdown menu */


/* END Menú barra de navegación */

/* Menú lateral */
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');

    menuIcon.addEventListener('click', () => {
        sideMenu.classList.toggle('show');
    });
});/* END Menú lateral */



// Script para mostrar el ancho de la pantalla en la consola
document.addEventListener('DOMContentLoaded', () => {
    // Función para mostrar el ancho de la pantalla
    function mostrarAnchoPantalla() {
        console.log(`El ancho de la pantalla es: ${window.innerWidth}px`);
    }

    // Llamar a la función al cargar la página
    mostrarAnchoPantalla();

    // También puedes llamar a la función cuando se redimensiona la ventana
    window.addEventListener('resize', mostrarAnchoPantalla);
});


