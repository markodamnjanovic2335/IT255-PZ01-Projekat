 <?php

include("config.php");

function checkIfLoggedIn(){
global $conn;

if(isset($_SERVER['HTTP_TOKEN'])){
  $token = $_SERVER['HTTP_TOKEN'];
  $result = $conn->prepare("SELECT * FROM korisnici WHERE token='$token'");
  $result->bind_param("s",$token);
  $result->execute();
  $result->store_result();
  $num_rows = $result->num_rows;
if($num_rows > 0)
{
    return true;
}
else{
    return false;
}
}
else{
    return false;
}
}

function checkIfLoggedInAdmin(){
  global $conn;
  if(isset($_SERVER['HTTP_TOKEN'])){
      $token2 = $_SERVER['HTTP_TOKEN'];
      $result = mysqli_query($conn, "SELECT * FROM admin WHERE token2='$token2'");
      $num_rows = mysqli_num_rows($result);
  if($num_rows > 0)
  {
      return true;
  }
  else{
    return false;
  }
  }
  else{
    return false;
  }
}




function login($username, $password){
global $conn;
$rarray = array();
if(checkLogin($username,$password)){
$id = sha1(uniqid());
$result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE username=?");
$result2->bind_param("ss",$id,$username);
$result2->execute();
$rarray['token'] = $id;
} else{
header('HTTP/1.1 401 Unauthorized');
$rarray['error'] = "Invalid username/password";
}
return json_encode($rarray);
}

function loginAdmin($username, $password){
global $conn;
$rarray = array();
if(checkLoginAdmin($username,$password)){
$id = sha1(uniqid());
$result2 = $conn->prepare("UPDATE admin SET token2=? WHERE username=?");
$result2->bind_param("ss",$id,$username);
$result2->execute();
$rarray['token2'] = $id;
} else{
header('HTTP/1.1 401 Unauthorized');
$rarray['error'] = "Invalid username/password";
}
return json_encode($rarray);
}

function checkLogin($username, $password){
global $conn;
$password = md5($password);
$result = $conn->prepare("SELECT * FROM korisnici WHERE username=? AND password=?");
$result->bind_param("ss",$username,$password);
$result->execute();
$result->store_result();
$num_rows = $result->num_rows;
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}


function checkLoginAdmin($username, $password){
global $conn;
$password = md5($password);
$result = $conn->prepare("SELECT * FROM admin WHERE username=? AND password=?");
$result->bind_param("ss",$username,$password);
$result->execute();
$result->store_result();
$num_rows = $result->num_rows;
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}


function register($username, $password, $firstname, $lastname, $adresa, $ulica , $telefon){
global $conn;
$rarray = array();

$errors = "";
if(checkIfUserExists($username)){
$errors .= "Username already exists\r\n";
}
if(strlen($username) < 5){
$errors .= "Username must have at least 5 characters\r\n";
}
if(strlen($password) < 5){
$errors .= "Password must have at least 5 characters\r\n";
}
if(strlen($firstname) < 3){
$errors .= "First name must have at least 3 characters\r\n";
}
if(strlen($lastname) < 3){
$errors .= "Last name must have at least 3 characters\r\n";
}
if(strlen($adresa) < 3){
$errors .= "Adress must have at least 3 characters\r\n";
}
if(strlen($ulica) < 3){
$errors .= "Street must have at least 3 characters\r\n";
}
if(strlen($telefon) < 3){
$errors .= "Telephone must have at least 3 characters\r\n";
}
if($errors == ""){
$stmt = $conn->prepare("INSERT INTO korisnici (firstname, lastname, username,
password,adresa,ulica,telefon) VALUES (?, ?, ?, ?, ?, ?, ?)");
$pass =md5($password);
$stmt->bind_param("sssssss", $firstname, $lastname, $username, $pass, $adresa, $ulica, $telefon);
if($stmt->execute()){
$id = sha1(uniqid());
$result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE
username=?");
$result2->bind_param("ss",$id,$username);
$result2->execute();
$rarray['token'] = $id;
}else{
header('HTTP/1.1 400 Bad request');
$rarray['error'] = "Database connection error";
}
} else{
header('HTTP/1.1 400 Bad request');
$rarray['error'] = json_encode($errors);
}
return json_encode($rarray);
}
function checkIfUserExists($username){
global $conn;
$result = $conn->prepare("SELECT * FROM korisnici WHERE username=?");
$result->bind_param("s",$username);
$result->execute();
$result->store_result();
$num_rows = $result->num_rows;
if($num_rows > 0)
{
return true;
}
else{
return false;
}
}


function getComments(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM pricaonica");
$num_rows = mysqli_num_rows($result);
$komentari = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$one_comm = array();
$one_comm['id'] = $row['id'];
$one_comm['komentar'] = $row['komentar'];
$one_comm['user'] = $row['user'];
array_push($komentari,$one_comm);
}
}
$rarray['komentari'] = $komentari;
return json_encode($rarray);

}

function spisakKorisnika(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM korisnici");
$num_rows = mysqli_num_rows($result);
$spisak = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$one_comm = array();
$one_comm['korisnici_ID'] = $row['korisnici_ID'];
$one_comm['firstname'] = $row['firstname'];
$one_comm['lastname'] = $row['lastname'];
$one_comm['username'] = $row['username'];
$one_comm['adresa'] = $row['adresa'];
$one_comm['ulica'] = $row['ulica'];
$one_comm['telefon'] = $row['telefon'];
array_push($spisak,$one_comm);
}
}
$rarray['spisak'] = $spisak;
return json_encode($rarray);

}

function narudzbine(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM korpa");
$num_rows = mysqli_num_rows($result);
$korpa = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$one_comm = array();
$one_comm['id'] = $row['id'];
$one_comm['username'] = $row['username'];
$one_comm['naziv_zanr'] = $row['naziv_zanr'];
$one_comm['naziv_knjige'] = $row['naziv_knjige'];
$one_comm['opis'] = $row['opis'];
$one_comm['cena'] = $row['cena'];

array_push($korpa,$one_comm);
}
}
$rarray['korpa'] = $korpa;
return json_encode($rarray);

}




function getUserByToken($token){
	global $conn;
	$rarray = array();
	$token = mysqli_real_escape_string($conn,$token);
			$result2 = $conn->query("SELECT * FROM korisnici WHERE token = ".$token);
			while($row = $result2->fetch_assoc()) {
				$rarray['username'] = $row;
			}
		return json_encode($rarray);

}

function getAdminByToken($token2){
	global $conn;
	$rarray = array();
	$token2 = mysqli_real_escape_string($conn,$token2);
			$result2 = $conn->query("SELECT * FROM admin WHERE token2 = ".$token2);
			while($row = $result2->fetch_assoc()) {
				$rarray['username'] = $row;
			}
		return json_encode($rarray);

}


function deleteServis($id){
	global $conn;
	$rarray = array();
	  if ( !(checkIfLoggedIn()) ) {
		$result = $conn->prepare("DELETE FROM knjige WHERE knjige_ID=?");
		$result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
	  }
	return json_encode($rarray);
}

function deleteNarudzbina($id){
	global $conn;
	$rarray = array();

		$result = $conn->prepare("DELETE FROM korpa WHERE id=?");
		$result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";

	return json_encode($rarray);
}

function deleteProfil($korisnici_ID){
	global $conn;
	$rarray = array();

		$result = $conn->prepare("DELETE FROM korisnici WHERE korisnici_ID=?");
		$result->bind_param("i",$korisnici_ID);
		$result->execute();
		$rarray['success'] = "Deleted successfully";

	return json_encode($rarray);
}

function getId($knjige_ID){
	global $conn;
	$rarray = array();

	$knjige_ID = mysqli_real_escape_string($conn,$knjige_ID);
	$result2 = $conn->query("SELECT * FROM knjige JOIN zanr ON knjige.ZANR_ID=zanr.ID WHERE knjige_ID = ".$knjige_ID);
			while($row = $result2->fetch_assoc()) {
				$rarray['knjige'] = $row;
	}

		return json_encode($rarray);

}
?>
