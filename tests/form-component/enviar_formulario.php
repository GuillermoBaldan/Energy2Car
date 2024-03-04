<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo_destino = "guillermo@generico.com";
    $asunto = "Nuevo registro en el formulario";

    $mensaje = "Se ha recibido un nuevo registro con los siguientes datos:\n\n";

    foreach ($_POST as $clave => $valor) {
        $mensaje .= ucfirst($clave) . ": " . $valor . "\n";
    }

    // Enviar correo electrónico
    if (mail($correo_destino, $asunto, $mensaje)) {
        echo "El formulario ha sido enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.";
    }
} else {
    echo "No se recibió ningún dato del formulario.";
}
?>
