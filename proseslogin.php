<?php

require_once ('connection.php');

$stmt = $pdo->query('SELECT username, password FROM users');
// var_dump($stmt->fetch());

$username = $stmt-fetch()['username'];
$password = $stmt-fetch()['passowrd'];

