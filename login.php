<?php
if($_GET['email']){
	$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

	$server = $url["host"];
	$username = $url["user"];
	$password = $url["pass"];
	$db = substr($url["path"], 1);

	$mysqli=new mysqli($server,$username,$password);

	// Check connection
	//if (mysqli_connect_errno()) {
	if ($mysqli->connect_errno) {
	  	echo -2;
	  	exit();
	}

	if($mysqli->select_db($db)){
		$sql = 'SELECT * FROM `usuarios` WHERE email="'.$_GET['email'].'"';

		$result = $mysqli->query($sql);

		if($result->num_rows>0){
			while($row = mysqli_fetch_array($result)) {
				echo $row['id'];
			}
			$result->close();
		} else {
			echo -3;
		}
	} else {
		echo -4;
	}

	$mysqli->close();

} else {
	echo -1;
}
?>
