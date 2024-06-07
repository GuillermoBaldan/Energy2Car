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

/* Menú side-menu */
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
    let menuVisible = false; // Estado del menú

    menuIcon.addEventListener('click', () => {
        if (menuVisible) {
            sideMenu.style.left = '-250px';
        } else {
            sideMenu.style.left = '0';
        }
        menuVisible = !menuVisible; // Alternar el estado del menú
        console.log("Se ha pulsado el menu hamburguesa - Menu lateral code");
        console.log(menuVisible)
    });

    // Ocultar el menú cuando se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !sideMenu.contains(event.target)) {
            if (menuVisible) {
                sideMenu.style.left = '-250px';
                menuVisible = false;
                console.log("Se ha pulsado fuera del menu");
            }
        }
    });
});

/*END side-menu    */

/* Menú side-menu-chargecar */
/* Menú side-menu-chargecar */
document.addEventListener('DOMContentLoaded', () => {
    const chargeCarLink = document.getElementById('chargeCarLink');
    const sideMenuChargeCar = document.querySelector('.side-menu-chargecar');
    let menuVisible = false;

    console.log("Se ha cargado el código del side-menu-chargecar");

    chargeCarLink.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        if (menuVisible) {
            sideMenuChargeCar.style.left = '-250px';
        } else {
            sideMenuChargeCar.style.left = '250px';
        }
        menuVisible = !menuVisible;
        console.log("Se ha pulsado 'Carga tu coche'");
    });

    document.addEventListener('click', (event) => {
        if (!chargeCarLink.contains(event.target) && !sideMenuChargeCar.contains(event.target)) {
            if (menuVisible) {
                sideMenuChargeCar.style.left = '-250px';
                menuVisible = false;
                console.log("Se ha pulsado fuera del menú");
            }
        }
    });
});


/*END side-menu-chargecar    */

/* Dropdown menu */
document.addEventListener('DOMContentLoaded', () => {
    const dropdownMenu = document.querySelector('.container-dropdown-menu');
    const mobileNavbar = document.querySelector('.mobile-navbar'); // Navbar para resoluciones móviles

});/* END Dropdown menu */


/* END Menú barra de navegación */







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

//Gestión de las cookies
document.addEventListener('DOMContentLoaded', () => {
    const acceptButton = document.querySelector('.accept-btn');
    const cookieBanner = document.querySelector('.cookie-banner');
    
    console.log(getCookie('cookiesAccepted'))
    // Comprobar si la cookie existe
    if (!getCookie('cookiesAccepted')) {
        // Mostrar el banner si la cookie no existe
        cookieBanner.style.display = 'flex';
    }else{
        cookieBanner.style.display = 'none';
    }

    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Función para obtener una cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }


    // Evento de clic en el botón aceptar
    acceptButton.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // La cookie expirará en 1 año
        cookieBanner.style.display = 'none';
        console.log("cookies accepted!")
    });
});


