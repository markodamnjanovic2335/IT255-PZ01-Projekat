<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset( $_POST['komentar']) && ($_POST['user']) ){
$komentar = $_POST['komentar'];
$user = $_POST['user'];
$stmt = $conn->prepare("INSERT INTO pricaonica (komentar,user) VALUES (?, ?)");
$stmt->bind_param("ss", $komentar,$user);
$stmt->execute();
echo "ok";
}
?>
