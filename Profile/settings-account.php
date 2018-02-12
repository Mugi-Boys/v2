<?php include "../sesion.php" ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title>
		Settings
	</title>
	<!--CSS-->
		<?php include "../metas.php" ?>

</head>

<body>
	<!-- Header -->
	<!-- <?php include '../header&footer_includes/header.php';?> -->
	<!-- User nav bar -->
	<?php include '../header&footer_includes/navbar_users.php';?>
	<!-- Body -->
	<div class = "container-fluid">
    <div class="col-xs-12 col-md-12 sticky">

          <form class="bookingForm" method="POST" ref="" >
          <!-- <form class="bookingForm" method="POST" ref={ref => (this.form = ref)} onSubmit={e => this.handleSubmit(e)} > -->
            <!-- {/* Basic form */} -->
						<?php $actualData = "SELECT * FROM users WHERE id_user=$id_usua";
						 $result = mysqli_query($conexion,$actualData);
						 $dato = mysqli_fetch_array($result);

						 $contact="SELECT * FROM contact WHERE users_id_user=$id_usua";
 						 $contactResult = mysqli_query($conexion,$contact);
 						 $contactData = mysqli_fetch_array($contactResult);
						?>
            <div class="settingsBox">
              <div class="titleSettingsBox">
                <h3>Mis datos</h3>
              </div>
              <div class="row settingsBoxData">
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Nombre</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="n_firstname" placeholder="" value=<?php echo '"'.$dato['first_name'].'"'; ?>/>
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Apellido</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="n_lastname" placeholder="" value=<?php echo '"'.$dato['last_name'].'"'; ?>/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Soy</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="" disabled/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Fecha de nacimiento</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="" disabled value=<?php echo '"'.$dato['birth'].'"'; ?>/>
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Dirección de correo electrónico</label>
                  <div class="control col-md-8 form-group">
                    <!-- <label>{data.getOwnUser.email}</label> -->
										<label class="control-label"><?php echo $dato['email']; ?></label>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Número de telefono</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="n_phone" placeholder="" value=<?php echo '"'.$contactData['phone'].'"'; ?>/>

                  </div>
                </div>
                <!-- <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Idioma preferido</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="" disabled/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Moneda preferida</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name ="" disabled/>
                  </div>
                </div> -->
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">¿Dónde vives?</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="n_address" placeholder="" value=<?php echo '"'.$contactData['adress'].'"'; ?>/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Describete</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="n_biography" placeholder="" value=<?php echo '"'.$dato['biograpy'].'"'; ?>/>
                  </div>
                </div>

              </div>
            </div>
            <!-- {/* Optional form */} -->
            <!-- <div class="settingsBox">
              <div class="titleSettingsBox">
                <h3>Opcional</h3>
              </div>
              <div class="row settingsBoxData">
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Centro educativo</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="" disabled/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Idiomas</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="" disabled/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Trabajos</label>
                  <div class="control col-md-8 form-group">
                    <input type="text" name="n_job" placeholder=""/>
                  </div>
                </div>
              </div>
            </div> -->

            <div class="col-md-12 col-xs-12 form-group">
              <small>Ingresa tu contraseña para confirmar los cambios</small>
              <div>
                <label class="form-group">Contraseña</label>
              </div>
              <div class="control col-md-8 col-xs-12 form-group">
                <input type="password" name="user_password" />
              </div>
              <div class="col-md-4 col-xs-12 form-group">
                <div class="control">
                  <button type="submit" class="btn btn-magenta" >Guardar Cambios</button>
                </div>
              </div>
            </div>
          </form>
        </div>
  </div>

	<!-- Footer -->
	<?php include '../header&footer_includes/footer.php';?>
</body>
</html>
