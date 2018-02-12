<?php include '../sesion.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title>
		Registro
	</title>
	<?php include 'metas.php'; ?>
	<!------estilos css ----->
</head>

<body>

    <!---Termina Header--->
    <!--Inicia cuerpo-->

        <div class="fondo">
          <img src="media/logo.png" width="50%" height="auto"/>
        </div>

	    <div class="formulario col-md-5 col-sm-10 col-xs-10">
				<br><br>
	      <center>
					<h2>Registrar usuario</h2><br>
						<div id="alerta" class="alert alert-success alert-dismissable">
							<button type="button" class="close" data-dismiss="alert">&times;</button>
							<strong>¡Felicidades!</strong> El usuario se registro correctamente.
							<br>
							<br><?php
							if($nivel==""){
								echo '<a href="loginform.php" class="alert-link">Para ingresar has click aqui</a>.';
							}
							 ?>
						</div>
                <form action="" name="registro" id="registro" method="POST" class="form-horizontal" role="form">


								        <div class="form-group">
                            <label for="NUser" class="control-label  col-md-offset-1 col-md-4">Nombre(s)</label>
                            <div class="col-md-6 col-sm-12">
                                <input class="form-control" id="usuario"  name="usuario" placeholder="Nombre o nombres"   required />
                            <span class="help-block"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="Apellidos" class="control-label  col-md-offset-1 col-md-4">Apellido(s)</label>
                            <div class="col-md-6 col-sm-12">
                                <input class="form-control" id="apellidos"  name="apellidos" placeholder="Apellidos de usuario"  required />
                            <span class="help-block"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="control-label  col-md-offset-1 col-md-4">Correo</label>
                            <div class="col-md-6 col-sm-12">
                                <input type="email" class="form-control" id="correo"  name="correo" placeholder="ejemplo@correo.com" required />
                            <span class="help-block"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="contraseña" class="control-label col-md-offset-1 col-md-4">Contraseña</label>
                            <div class="col-md-6 col-sm-12">
                                <input type="password" name="pass" class="form-control" required id="pass" placeholder="Al menos deben ser 6 caracteres" />
                            <span class="help-block"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="Rcont" class="control-label  col-md-offset-1 col-md-4">Repetir contraseña</label>
                            <div class="col-md-6 col-sm-12">
                                <input type="password" name="repass" class="form-control" required id="repass" placeholder="repite la contraseña" />
                            <span class="help-block"></span>
                            </div>
                        </div>

											  <div class="form-group">
												    <label for="Tel" class="control-label  col-md-offset-1 col-md-4">Teléfono</label>
												    <div class="col-md-6 col-sm-12">
												        	<input type="text" name="telefono" class="form-control" required id="telefono" placeholder="diez digitos seguidos" />
												          <span class="help-block"></span>
					                  </div>
												</div>

									      <div class="form-group">
									          <label for="Direccion" class="control-label  col-md-offset-1 col-md-4">Dirección</label>
									          <div class="col-md-6 col-sm-12">
									                <input type="text" name="direccion" class="form-control" required id="direccion"  />
								              		<span class="help-block"></span>
					                  </div>
												</div>
												<?php if($nivel==2||$nivel==""){
													echo '<input type="text" name="tipo" id="tipo" value="2" hidden="true" />';
															} else {
																	echo '<div class="form-group">
																			<label for="inputEmail3" class="control-label  col-md-offset-1 col-md-4">Nivel</label>
																			<div class="col-md-6 col-sm-12">';
																				// Consultar la base de datos
																				$qry=mysqli_query($conexion,"SELECT * FROM user_types");
																				echo "<select name='tipo' id='tipo' required class='form-control'>";
																				while($fila=@mysqli_fetch_assoc($qry)){
																				    echo "<option value='".$fila["id_user_types"]."'>".$fila["user_type"]."</option>";
																						}
																				echo "</select>";
																				mysqli_free_result($qry);
																				mysqli_close($conexion);
																			echo "</div>
										  							</div>";
															}
															?>
											    <div class="form-group">
															<button class="boton" type="button" onclick="Registro()"	name="boton" id="boton">Registrarse  <span class="fa fa-user-plus"></span></button>
															<span id="carga"></span>
															<br>
															 <a href=<?php echo $direccionBase."v2/custom-actions/loginform"; ?> ><strong>Si ya tienes una cuenta ingresa desde aqui.</strong></a>
															<br>
													</div>
										</form>
            </center>
        </div>

    <!--Termina cuerpo---->



    <!--Inicia Footer---->

        <footer>
			    <?php include 'pie.php'; ?>
        </footer>
        <!----Termina Footer---->

<!--scrips para el funcionamiento de las validaciones hasta el final para hacer mas veloz la carga de la pagina-->
					<script type="text/javascript">
			        $(document).ready(function() {
								Ccarrito();
					        $("#alerta").hide();
			            $("span.help-block").hide();
			        $("#usuario").blur(function(){validaTexto("usuario")});
			        $("#apellidos").blur(function(){validaTexto("apellidos")});
			        $("#correo").blur(function(){Ccorreo()});
			        $("#repass").keyup(function(){repass()});
			        $("#pass").blur(function(){validaContra("pass")});

				  });//fin ready
			    </script>
</body>
</html>
