<?php
// require 'DB-settings.php';
  function get_data_user_auth($id_user_auth){
    require 'DB-settings.php';
    $query = 'SELECT * FROM users WHERE id_user=' . $id_user_auth;
    $result = mysqli_query($conexion, $query) or die('Consulta fallida: ' . mysqli_error());

    if(mysqli_num_rows($result) == 1 ){
      $row = mysqli_fetch_assoc($result);
      $user_json='{"firstname":"'.$row["first_name"]. '","lastname":"' .$row["last_name"]. '","email":"' .$row["email"]. '","photo":"' .$row["photo"]. '"}';
      return json_decode($user_json);
    } else {
      return json_decode('{"firstname":null, "lastname":null, "email":null, "photo":null}');
    }
    mysqli_free_result($result); // Liberar resultados
    mysqli_close($conexion);// Cerrar la conexión
  }

  $user_auth = get_data_user_auth(3);
  echo $user_auth->firstname;
  echo $user_auth->lastname;
  echo $user_auth->email;
  echo $user_auth->photo;

?>
