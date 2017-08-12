<?php
header('Access-Control-Allow-Methods: GET');
include("functions1.php");

if(isset($_GET['zanr_id'])){
	$id = intval($_GET['zanr_id']);
	echo addCart($id);
}
?>
