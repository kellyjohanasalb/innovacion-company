<?php
$servername = "localhost";
$username = "root"; // Usuario por defecto de XAMPP
$password = "";     // Contraseña por defecto (vacía en XAMPP)
$dbname = "crud_app"; // Nombre de tu BD

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}
?>
