<?php
sleep(1);
		if(isset($_POST['correo'])!="" && isset($_POST['pass'])!=""){
			$email= $_POST['correo'];
           $pass= $_POST['pass'];
			$pass_encriptada1 = md5 ($pass); //Encriptacion nivel 1
			$pass_encriptada2 = crc32($pass_encriptada1); //Encriptacion nivel 1
			$pass_encriptada3 = crypt($pass_encriptada2, "xtemp"); //Encriptacion nivel 2

   require("../DB-settings.php");
		   $query= "select * from users WHERE email='$email' and password='$pass_encriptada3' ";
		   $result = mysqli_query($conexion,$query);
  		   $dato = mysqli_fetch_array($result);
         // los resultados de la consulta
  		   $nombre		=		$dato['first_name']." ".$dato['last_name'];
  		   $id_user		=		$dato['id_user'];
				 $photo			=		$dato['photo'];
  		   $tipo			=		$dato['user_type'];

				 // la cookie que se va a construir
				 $details='{"name"	:	"'.$nombre.'",
					 					"id" 		: "'.$id_user.'",
										"photo" :	"'.$photo.'",
										"tipo" 	:	"'.$tipo.'"
										}';

    		   	if($id_user!=""){
         			 // session_start();
         		   // $_SESSION["nombre"]=$nombre;
         		   // $_SESSION["id_user"]=$id_user;
         		   // $_SESSION["nivel"]=$tipo;
        			//echo"<script language='javascript'>window.location='inicio.php'</script>";
        			   echo "1";
                  setcookie( "mi_cookie",  $details ,  time()+60*60*24 ,  "/");
									 mysqli_close($conexion);
        			//echo"<script language='javascript'>window.location='loginFail.html'</script>";
        		  }else{
        					echo "2";
									 mysqli_close($conexion);
            }
      }else{
        echo "2";
      }

?>
