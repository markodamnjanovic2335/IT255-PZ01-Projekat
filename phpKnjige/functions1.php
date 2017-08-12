<?php
include("config.php");



function getServisi(){
	global $conn;
	$rarray = array();

		$result = $conn->query("SELECT * FROM knjige");
		$num_rows = $result->num_rows;
		$servisi = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM knjige");
			while($row = $result2->fetch_assoc()) {
				$row['ZANR_NAZIV'] = getZanrById($row['ZANR_ID']);
				array_push($servisi,$row);
			}
		}
		$rarray['servisi'] = $servisi;
		return json_encode($rarray);

}
function addServis($zanr_id, $naziv_knjige,$autor, $opis,$cena){
	global $conn;
	$rarray = array();

			$stmt = $conn->prepare("INSERT INTO knjige (ZANR_ID, naziv_knjige, autor, opis,cena) VALUES (?, ?, ?, ?, ?)");
			$stmt->bind_param("issss", $zanr_id, $naziv_knjige, $autor, $opis, $cena);
			if($stmt->execute()){
				$rarray['success'] = "ok";
			}else{
				$rarray['error'] = "Database connection error";
			}
			return json_encode($rarray);

}


function getZanr(){
	global $conn;
	$rarray = array();

		$result = $conn->query("SELECT * FROM ZANR");
		$num_rows = $result->num_rows;
		$zanrovi = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM ZANR");
			while($row = $result2->fetch_assoc()) {
				array_push($zanrovi,$row);
			}
		}
		$rarray['zanrovi'] = $zanrovi;
		return json_encode($rarray);

}
function deleteServis($id){
	global $conn;
	$rarray = array();
	if (checkIfLoggedInAdmin()) {
		$result = $conn->prepare("DELETE FROM knjige WHERE knjige_ID=?");
		$result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
}
	return json_encode($rarray);
}
function getZanrById($id){
	global $conn;
	$rarray = array();
	$id = intval($id);
	$result = $conn->query("SELECT * FROM ZANR WHERE ID=".$id);
	$num_rows = $result->num_rows;
	$rowtoreturn = array();
	if($num_rows > 0)
	{
		$result2 = $conn->query("SELECT * FROM ZANR WHERE ID=".$id);
		while($row = $result2->fetch_assoc()) {
			$rowtoreturn = $row;
		}
	}
	return $rowtoreturn['naziv_zanr'];
}
function getKnjigeById($id){
	global $conn;
	$rarray = array();
	$id = intval($id);
	$result = $conn->query("SELECT * FROM knjige WHERE knjige_ID=".$id);
	$num_rows = $result->num_rows;
	$rowtoreturn = array();
	if($num_rows > 0)
	{
		$result2 = $conn->query("SELECT * FROM knjige WHERE knjige_ID=".$id);
		while($row = $result2->fetch_assoc()) {
			$rowtoreturn = $row;
		}
	}
	return $rowtoreturn['naziv_zanr'];
}
function addCart($zanr_ID){
	global $conn;
	$rarray = array();
	$errors = "";

				$stmt = $conn->prepare("INSERT INTO korpa (zanr_ID) VALUES (?)");
				$stmt->bind_param("s", $zanr_ID);
				if($stmt->execute()){
					$rarray['success'] = "ok";
				}else{
					$rarray['error'] = "Database connection error";
				}
				return json_encode($rarray);

}





?>
