<?php
if($_POST['email'] && $_POST['puntos'] && $_POST['respuestas'] && $_POST['seleccion'] && $_POST['tiempo']){
	$resultado = round($_POST['puntos']/count(explode(",",$_POST['respuestas']))*100);
	$tiempo = $_POST['tiempo']*1;
	$horas = floor($tiempo/3600);
	$minutos = floor(($tiempo - $horas*3600)/60);
	$segundos = $tiempo - $horas*3600 - $minutos*60;
	if($horas<10){
		$horas = "0".$horas;
	}
	if($minutos<10){
		$minutos = "0".$minutos;
	}
	if($segundos<10){
		$segundos = "0".$segundos;
	}
	
	$email_from = "whatisthat@alejandrofh.es";
	
	//////////////////////////////////////////////////////////////////////
	//	Enviando email al alumno.
	//////////////////////////////////////////////////////////////////////
	$email_to = $_POST['email'];
	
	$headers = 'Content-type: text/html; charset=utf-8; format=flowed' . "\r\n";
	$headers .= "From: " . $email_from . "\r\n";
	
	$message = '<html>';
	$message .= '<head>';
	$message .= '<style>';
	$message .= '.fin_texto {';
	$message .= 'text-align: left;';
	$message .= 'vertical-align: center;';
	$message .= 'color: black;';
	$message .= 'background: url(http://www.alejandrofh.es/rosco/blocnotas2.png);';
	$message .= 'width: 60%;';
	$message .= 'position: relative;';
	$message .= 'left: 200px;';
	$message .= 'top: -200px;';
	$message .= 'right: 10px;';
	$message .= 'padding: 12px;';
	$message .= 'padding-bottom: 20px;';
	$message .= 'padding-top: 22px;';
	$message .= '}';
	$message .= '</style>';
	$message .= '</head>';
	$message .= '<body>';
	$message .= '<img src="http://www.alejandrofh.es/rosco/cetelem-fin.jpg" heigth="200px" alt="Fin" />';
	$message .= '<div class="fin_texto" id="fin_texto">';
	$message .= "<h1 style=text-align:center;>¡Enhorabuena!</h1>";
	$message .= "<h2>Ya has acabado esta formación: </h2>";
	$message .= "  Número de preguntas: ".count(explode(",",$_POST['respuestas']))."<br />";
	$message .= "  Respuestas correctas: ".$_POST['puntos']."<br />";
	$message .= "  <strong>Resultado: ".$resultado."%</strong><br />";
	$message .= "<br />";
	if ($resultado == 100){
		$message .= "¡PERFECTO! ¡Ningún error! Enhorabuena, has superado la formación con la máxima puntuación.";
	} else if ($resultado >= 80 && $resultado < 100){
		$message .= "¡GENIAL! Si quieres puedes volver a hacerlo hasta conseguir el 100%.";
	} else if ($resultado >= 60 && $resultado < 80) {
		$message .= "Lo has hecho bien, repasa de nuevo los módulos y vuelve por aquí después.";
	} else {
		$message .= "No has conseguido la puntuación mínima. Repasa y vuelve a hacerlo.";
	}
	$message .= '</div>';
	
	echo mail($email_to, "Resultados de la prueba 'What is that?'", $message, $headers);
	
	
	//////////////////////////////////////////////////////////////////////
	//	Enviando email al departamento de formación.
	//////////////////////////////////////////////////////////////////////
	$email_to = "cetelearning@cetelem.es";
	$email_to = "afharo@gmail.com,marta.lopez-duran.bec@cetelem.es";
	
	$headers = 'Content-type: text/html; charset=utf-8; format=flowed' . "\r\n";
	$headers .= "From: " . $email_from . "\r\n";
	
	$message = '<html>';
	$message .= '<head>';
	$message .= '<style>';
	$message .= '.fin_texto {';
	$message .= 'text-align: left;';
	$message .= 'vertical-align: center;';
	$message .= 'color: black;';
	//$message .= 'background: url(http://www.alejandrofh.es/rosco/blocnotas2.png);';
	$message .= 'width: 60%;';
	$message .= 'position: relative;';
	$message .= 'left: 200px;';
	$message .= 'top: -200px;';
	$message .= 'right: 10px;';
	$message .= 'padding: 12px;';
	$message .= 'padding-bottom: 20px;';
	$message .= 'padding-top: 22px;';
	$message .= '}';
	$message .= '</style>';
	$message .= '</head>';
	$message .= '<body>';
	$message .= '<img src="http://www.alejandrofh.es/rosco/cetelem-fin.jpg" heigth="200px" alt="Fin" />';
	$message .= '<div class="fin_texto" id="fin_texto">';
	$message .= "<h2>El alumno ".$_POST['email']." ha finalizado la formación 'What is that?' con los siguientes resultados: </h2>";
	$message .= "  Tiempo invertido: ".$horas.":".$minutos.":".$segundos."<br />";
	$message .= "  Respuestas correctas: ".$_POST['puntos']." de ".count(explode(",",$_POST['respuestas']))."<br />";
	$message .= "  <strong>Resultado: ".$resultado."%</strong><br />";
	$message .= "<br />";
	if ($resultado == 100){
		$message .= "Se le ha felicitado consecuentemente.";
	} else if ($resultado >= 80 && $resultado < 100){
		$message .= "Se le ha instado a ir a por el 100%.";
	} else {
		$message .= "Se le ha pedido que repase y vuelva.";
	}
	$message .= '</div>';
	
	echo mail($email_to, "Resultados de la prueba 'What is that?'", $message, $headers);
} else {
	echo -1;
}
?>