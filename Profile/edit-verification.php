<?php include "../sesion.php" ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title>
		User Profile
	</title>

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
          <div class="settingsBox">
            <div class="titleSettingsBox">
              <h3>Tu información verificada</h3>
            </div>
            <div class="row settingsBoxData">
              <div class="col-md-12 form-group">
                <label class="col-md-4 form-group">Dirección de correo electrónico</label>
                <div class="control col-md-8 form-group">
                  <p>Has configurado tu dirección de correo electrónico: <strong><?php echo "mi email"; ?></strong></p>
                  <p>Realizar este paso es importante, ya que nos permite comunicarnos contigo de forma segura.</p>
                </div>
              </div>

              <div class="col-md-12 form-group">
                <label class="col-md-4 form-group">Número de telefóno</label>
                <div class="control col-md-8 form-group">
                  <p>
                    Tu número <b><?php echo "mi telefono"; ?></b> solo se comparte con otros miembros de Imviatori cuando tienes una reservación confirmada con ellos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

			<?php mysqli_close($conexion) ?>
	<!-- Footer -->
	<?php include '../header&footer_includes/footer.php';?>
</body>
</html>
