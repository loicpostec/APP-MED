<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set("display_errors", 1);


// CONFIG
$dbname = 'LP_APPMED';
$hostname = 'localhost';
$username = 'root';
$password = 'root';
// CONNECT DB
$dsn = "mysql:host=$hostname;dbname=$dbname";
$pdo = new PDO($dsn, $username, $password);
$pdo->SetAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>