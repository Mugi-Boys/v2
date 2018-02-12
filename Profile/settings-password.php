<?php include '../sesion.php' ?>
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
	<!-- User nav bar -->
	<?php include '../header&footer_includes/navbar_users.php';?>
	<!-- Body -->
	<div class = "container-fluid">
        <div class="col-xs-12 col-md-12 sticky">

          <form class="bookingForm" method="POST" ref="" >

            <div class="settingsBox">
              <div class="titleSettingsBox">
                <h3>Cambio de contraseña</h3>
              </div>
              <div class="row settingsBoxData">
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Contraseña anterior</label>
                  <div class="control col-md-8 form-group">
                    <input type="password" name="old_password"/>
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Nueva contraseña </label>
                  <div class="control col-md-8 form-group">
                    <input type="password" name="new_password"/>
                  </div>
                </div>
                <div class="col-md-12 form-group">
                  <label class="col-md-4 form-group">Confirma nueva contraseña</label>
                  <div class="control col-md-8 form-group">
                    <input type="password" name="new_password_two"/>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 form-group">
                <div class="control">
                  <button type="submit" class="btn btn-magenta" >Guardar</button>
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
