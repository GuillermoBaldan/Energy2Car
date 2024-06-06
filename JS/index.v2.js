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
document.addEventListener('DOMContentLoaded', () => {
    const chargeCarLink = document.querySelector('#chargeCarLink');
    const SideMenuChargeCar = document.querySelector('.side-menu-chargecar');
    let menuVisible = false; // Estado del menú
    console.log("se carga addeventlistener del SideMenuChargeCar")
    chargeCarLink.addEventListener('click', () => {
        
        if (menuVisible) {
            SideMenuChargeCar.style.left = '-250px';
        } else {
            SideMenuChargeCar.style.left = '250px'; // Ajustado de '250px' a '0' para que aparezca desde el borde izquierdo
        }
        menuVisible = !menuVisible; // Alternar el estado del menú
        console.log("Se ha pulsado el enlace 'Carga tu coche'");
    });

    // Ocultar el menú cuando se hace clic fuera de él
/*     document.addEventListener('click', (event) => {
        if (!chargeCarLink.contains(event.target) && !SideMenuChargeCar.contains(event.target)) {
            if(menuVisible){
                SideMenuChargeCar.style.left = '-250px';
                menuVisible = !menuVisible;
            }
            console.log("Se ha pulsado fuera del menu sidecarcharge");
        }
    }); */
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


