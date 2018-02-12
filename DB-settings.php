<?php
  $server="localhost";
	$user="root";
	$password="";
	$bd="usersDB";

			$conexion = mysqli_connect($server,$user,$password,$bd) or die ("Error de conexion".mysqli_errno($conexion));

	//////tablas dentro de la base de datos
?>
