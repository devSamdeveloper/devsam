<?php

$user="Sebastian";
$pass="L33tsupa!";
$server="localhost";
$db="devsam";
    
try {
    $con= new PDO("mysql:host=$server; dbname=$db;",$user,$pass);
} catch(PDOException $e){
    die("Fallo la conexion");
}


?>