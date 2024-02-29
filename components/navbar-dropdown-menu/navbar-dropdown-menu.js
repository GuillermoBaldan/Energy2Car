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