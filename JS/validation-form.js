document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');

    form.addEventListener('submit', (event) => {
        let formValid = true;

        inputs.forEach(input => {
            const value = input.value.trim();

            // Si el campo es de tipo contraseña, omitir la validación específica
            /* if (input.type === 'password') {
                return;
            } */

            // Validar que la caja no esté vacía
            if (value === '') {
                alert('La caja no debe estar vacía.');
                formValid = false;
                return;
            }

            // Validar que no contenga caracteres $, @, #
            const invalidChars = /[$@#]/;
            if (invalidChars.test(value) && !(input.type === 'password') && !(input.type === 'email')) {
                alert('La caja no debe contener caracteres $, @, #.');
                formValid = false;
                return;
            }

            // Validar que no comience con un número
            const startsWithNumber = /^[0-9]/;
            if (startsWithNumber.test(value)) {
                alert('La caja no debe comenzar con un número.');
                formValid = false;
                return;
            }
        });

        if (!formValid) {
            event.preventDefault();
        }
    });
});
