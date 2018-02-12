<?php
   require '../DB-settings.php';
switch($_POST["tarea"]){

    case 'inserta':

    	  $usuario = $_POST['usuario'];
    	  $apellidos = $_POST['apellidos'];
        $email= $_POST['correo'];
        $cont= $_POST['pass'];
        $cont2= $_POST['repass'];
        $tel= $_POST['telefono'];
        $dir= $_POST['direccion'];
        $tipo= $_POST['tipo'];

          // Comenzamos con la encriptacion a el estilo de Xt3mP.
          $pass_encriptada1 = md5 ($cont); //Encriptacion nivel 1
          $pass_encriptada2 = crc32($pass_encriptada1); //Encriptacion nivel 2
          $pass_encriptada3 = crypt($pass_encriptada2, "xtemp"); //Encriptacion nivel 3
          // Aqui será demasiado dificil poder llegar a la password verdadera ya que por ejemplo, podrian desencriptar el md5 pero aún faltaria demasiado.
          $query="INSERT INTO users(first_name,last_name,email,password,user_type) values ('$usuario','$apellidos','$email','$pass_encriptada3','$tipo')";
          $in=mysqli_query($conexion,$query);
          $idUser=mysqli_insert_id($conexion); //para obtener el valor del registro
          $query2="INSERT INTO contact(phone,adress,users_id_user) values ('$tel','$dir','$idUser')";
          $contact=mysqli_query($conexion,$query2);
          if($in ){
            echo "1";
      			 mysqli_close($conexion);
    			//echo "<h1>Usuario registrado correctamente</h1>";
    		}else {
      echo "id de usuario->".$idUser;
    			echo mysqli_error($conexion);
    			 mysqli_close($conexion);
    		}
    break;

    case 'modifica':

        $idUser=$_POST["idusua"];
        $usuario = $_POST['usuario'];
        $apellidos = $_POST['apellidos'];
        $email= $_POST['correo'];
        $tel= $_POST['telefono'];
        $dir= $_POST['direccion'];
        $modi="UPDATE usuarios SET Nombre='$usuario',apellido='$apellidos',correo='$email',direccion='$dir',telefono='$tel' WHERE id_usuario='$idUser'";
        $mod=mysqli_query($conexion,$modi);
      if($mod==true){
            echo "1";//el usuarios se modifico con exito
      			 mysqli_close($conexion);
        }else {
          echo mysqli_error($conexion);
    			 mysqli_close($conexion);
        }
    break;
}
?>
