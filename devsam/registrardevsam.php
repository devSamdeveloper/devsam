<?php
include("con_db.php");

if (isset($_POST['email'])) {
    if (strlen($_POST['email']) >= 1) {
        $email = trim($_POST['email']);
        $consulta = "INSERT INTO newslatter (`id`, `email`) VALUES (NULL, :email)";
        $stmt = $con->prepare($consulta);
        $stmt->bindParam(':email', $email);
        $resultado = $stmt->execute();

        if ($resultado) {
            echo '<h3 class="ok">¡Te has suscrito correctamente!</h3>';
        } else {
            echo '<h3 class="bad">¡Ups, ha ocurrido un error!</h3>';
        }
    } else {
        echo '<h3 class="bad">¡Por favor completa los campos!</h3>';
    }
}
?>
