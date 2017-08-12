<?php
header('Access-Control-Allow-Methods: GET, POST');
include("functions1.php");

if(isset($_POST['zanr_id']) && isset($_POST['naziv_knjige'])&& isset($_POST['autor']) && isset($_POST['opis'])&& isset($_POST['cena'])){
  
$zanr_id = $_POST['zanr_id'];
$naziv_knjige = $_POST['naziv_knjige'];
$autor = $_POST['autor'];
$opis = $_POST['opis'];
$cena = $_POST['cena'];

echo addServis($zanr_id, $naziv_knjige,$autor, $opis,$cena);
}
?>
