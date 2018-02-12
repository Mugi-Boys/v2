<?php

	// direccion que va a poner la configuracion de wp
	$direccionBase="http://localhost/ImviatoriTI/site/";
	//date_default_timezone_set("America/Mexico_City");
	$fechaAct=date("Y-m-d");
//inicio la sesión
session_start();
//error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
//se comprueba si el usuario esta autentificado

if(isset($_COOKIE['mi_cookie'])!=0 || isset($_COOKIE['mi_cookie'])!=""){
		$var = json_decode($_COOKIE['mi_cookie']);

    $id_usua = $var->id;
    $nombre  = $var->name;
    $nivel   = $var->tipo;
		$photo	 = $var->photo;

}else {
		$nivel    =   "";
	 $archivo_actual = basename($_SERVER['PHP_SELF']);
	 if ($archivo_actual != "loginform.php" && $archivo_actual != "register.php") {
			header('Location:'.$direccionBase);
	 }
}

require_once("../DB-settings.php");
?>
