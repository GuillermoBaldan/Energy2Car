document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const resetButton = form.querySelector('button[type="reset"]');

    resetButton.addEventListener('click', () => {
        form.reset();
        console.log("Formulario reseteado");
    });
});
