<?php
if($_GET['email']){
	$mysqli=new mysqli($_ENV['MYSQL_HOST'],$_ENV['MYSQL_USER'],$_ENV['MYSQL_PASS']);

	// Check connection
	//if (mysqli_connect_errno()) {
	if ($mysqli->connect_errno) {
	  	echo -2;
	  	exit();
	}

	if($mysqli->select_db($_ENV["MYSQL_DB"])){
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
