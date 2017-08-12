<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset($_POST['username']) && isset($_POST['naziv_zanr']) && isset($_POST['naziv_knjige']) && isset($_POST['opis'])
	&& isset($_POST['cena'])){
$username = $_POST['username'];
$naziv_zanr = ($_POST['naziv_zanr']);
$naziv_knjige = ($_POST['naziv_knjige']);
$opis = ($_POST['opis']);
$cena = ($_POST['cena']);
$stmt = $conn->prepare("INSERT INTO korpa (username, naziv_zanr, naziv_knjige , opis, cena) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssi", $username, $naziv_zanr, $naziv_knjige , $opis, $cena);
$stmt->execute();
echo "ok";
}
?>
