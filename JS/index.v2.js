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
    let menuVisible = false; // Estado del menú

    const animateMenu = (start, end, duration) => {
        const frames = 20; // Número de fotogramas
        const interval = duration / frames; // Duración de cada fotograma
        const step = (end - start) / frames; // Cantidad de movimiento por fotograma
        let current = start;
        let frame = 0;

        const animate = () => {
            current += step;
            sideMenu.style.transform = `translateX(${current}px)`;
            frame += 1;
            if (frame < frames) {
                setTimeout(animate, interval);
            } else {
                if (end === -250) {
                    menuVisible = false;
                } else {
                    menuVisible = true;
                }
            }
        };

        animate();
    };

    menuIcon.addEventListener('click', () => {
        if (menuVisible) {
            animateMenu(0, -250, 100);
        } /* else {
            animateMenu(-250, 0, 100);
        } */
        console.log("Se ha pulsado el menu hamburguesa");
    });

    // Ocultar el menú cuando se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !sideMenu.contains(event.target)) {
            if (menuVisible) {
                animateMenu(0, -250, 100);
                console.log("Se ha pulsado fuera del menu");
            }
        }
    });
});


/*END Menú lateral    */


/* Menu lateral carga tu coche */
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
    const cargaTuCocheLink = document.querySelector('.nav-links li a[href="#carga-tu-coche"]');
    const sideMenuMobile = document.querySelector('.side-menu-mobile');

    // Maneja el clic en el icono del menú para el menú lateral principal
    menuIcon.addEventListener('click', () => {
        sideMenu.classList.toggle('show');
    });

    // Maneja el clic en el enlace "Carga tu coche" para resoluciones móviles
    if (window.innerWidth <= 767) {
        cargaTuCocheLink.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            sideMenuMobile.classList.toggle('show');
        });
    }
});


/* END Menu lateral carga tu coche */


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


