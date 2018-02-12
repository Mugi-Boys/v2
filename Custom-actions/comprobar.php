<?php

sleep(1);
      $dato=$_POST["dato"];
	 require("../DB-settings.php");
			//Sentencia SQL para buscar en la tabla un usuario con esos email
			$query= "select * from users WHERE email='$dato'";
			//Ejecuto la sentencia
			$rs= mysqli_query($conexion,$query);
			if (mysqli_num_rows($rs)!=0){
				//usuario ya registrado
				echo 2;
  			 mysqli_close($conexion);
			}else{
				//nikname disponible
				echo 0;
  			 mysqli_close($conexion);
			}
?>
