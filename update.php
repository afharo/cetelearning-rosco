<?php
if($_POST['id_usuario'] && $_POST['letras'] && $_POST['respuestas'] && $_POST['seleccion'] && $_POST['tiempo']){
	$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

	$server = $url["host"];
	$username = $url["user"];
	$password = $url["pass"];
	$db = substr($url["path"], 1);

	$mysqli=new mysqli($server,$username,$password);

	// Check connection
	if ($mysqli->connect_errno) {
	  	echo -3;
	  	exit();
	}

	if($mysqli->select_db($db)){
		$nueva_prueba = false;
		$sql = 'SELECT MAX(id_prueba) as id_prueba FROM `resultados` WHERE id_usuario='.$_POST['id_usuario'];
		//$sql .= ' ORDER BY id_prueba DESC';

		$result = $mysqli->query($sql);

		if($result->num_rows>0){
			while($row = mysqli_fetch_array($result)) {
				$id_prueba = $row['id_prueba'];
			}
			$result->close();

			$sql = 'SELECT * FROM `resultados` WHERE id_usuario='.$_POST['id_usuario'];
			$sql .= ' AND id_prueba='.$id_prueba;
			$sql .= ' AND puntos=0';
			$result = $mysqli->query($sql);
			if($result->num_rows>0){
				$id_prueba = $id_prueba;
			} else {
				$id_prueba = $id_prueba + 1;
				$nueva_prueba = true;
			}

		} else {
			$id_prueba = 1;
			$nueva_prueba = true;
		}

		$ok = 0;
		$letras = explode(",",$_POST['letras']);
		$seleccion = explode(",",$_POST['seleccion']);
		$respuesta = explode(",",$_POST['respuestas']);
		$tiempo = $_POST['tiempo']*1;

		for ($i=0; $i<count($letras); $i++){
			if($nueva_prueba){
				$sql = 'INSERT INTO `resultados` (id_usuario,id_prueba,letra,respuesta,puntos)';
				$sql .= ' VALUES ('.$_POST['id_usuario'].','.$id_prueba.',"'.$letras[$i].'","'.$seleccion[$i].'",'.$respuesta[$i].')';
			} else {
				$sql = 'UPDATE `resultados`';
				$sql .= ' SET respuesta="'.$seleccion[$i].'",puntos='.$respuesta[$i];
				$sql .= ' WHERE id_usuario='.$_POST['id_usuario'];
				$sql .= ' AND id_prueba='.$id_prueba;
				$sql .= ' AND letra="'.$letras[$i].'"';
			}
			$result = $mysqli->query($sql);
			if($result && $ok!=-1){
				$ok = 1;
			} else {
				$ok = -1;
			}
		}

		if($nueva_prueba && $ok==1){
			$sql = 'INSERT INTO `tiempos` (id_usuario,id_prueba,tiempo)';
			$sql .= ' VALUES ('.$_POST['id_usuario'].','.$id_prueba.','.$tiempo.')';
		} elseif (!$nueva_prueba && $ok==1) {
			$sql = 'UPDATE `tiempos`';
			$sql .= ' SET tiempo='.$tiempo;
			$sql .= ' WHERE id_usuario='.$_POST['id_usuario'];
			$sql .= ' AND id_prueba='.$id_prueba;
		}
		if($ok==1){
			$result = $mysqli->query($sql);
			if($result && $ok!=-1){
				$ok = 1;
			} else {
				$ok = -2;
			}
		}

		echo $ok;

	} else {
		echo -4;
	}

	$mysqli->close();

} elseif($_GET['id_usuario']) {
	$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

	$server = $url["host"];
	$username = $url["user"];
	$password = $url["pass"];
	$db = substr($url["path"], 1);

	$mysqli=new mysqli($server,$username,$password,$db);

	// Check connection
	if ($mysqli->connect_errno) {
	  	echo -3;
	  	exit();
	}

	$sql = 'SELECT MAX(id_prueba) as id_prueba FROM `resultados` WHERE id_usuario='.$_GET['id_usuario'];
	$result = $mysqli->query($sql);

	if($result->num_rows>0){
		while($row = mysqli_fetch_array($result)) {
			$id_prueba = $row['id_prueba'];
		}
		$result->close();

		$sql = 'SELECT * FROM `resultados` WHERE id_usuario='.$_GET['id_usuario'];
		$sql .= ' AND id_prueba='.$id_prueba;
		$sql .= ' AND puntos=0';
		$result = $mysqli->query($sql);
		if($result->num_rows>0){
			$result->close();
			$sql = 'SELECT * FROM `resultados` WHERE id_usuario='.$_GET['id_usuario'];
			$sql .= ' AND id_prueba='.$id_prueba;
			$result = $mysqli->query($sql);
			if($result->num_rows>0){
				$respuesta = "";
				$seleccion = "";
				while($row = mysqli_fetch_array($result)) {
					$respuesta .= $row['puntos'].',';
					$seleccion .= $row['respuesta'].',';
				}
				$respuesta = substr($respuesta, 0, -1);
				$seleccion = substr($seleccion, 0, -1);
				$result->close();

				$sql = 'SELECT * FROM `tiempos` WHERE id_usuario='.$_GET['id_usuario'];
				$sql .= ' AND id_prueba='.$id_prueba;
				$result = $mysqli->query($sql);
				if($result->num_rows>0){
					$tiempo = "";
					while($row = mysqli_fetch_array($result)) {
						$tiempo = $row['tiempo'];
					}
					$result->close();
					echo $tiempo.";".$seleccion.";".$respuesta;
				} else {
					echo -1;
				}
			} else {
				echo -2;
			}
		} else {
			echo -3;
		}
	} else {
		echo -4;
	}
} else {
	echo -5;
}
?>
