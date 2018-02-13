<?php include "../sesion.php" ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title>
		User Profile
	</title>
	<!--CSS-->
		<?php include "../metas.php" ?>

</head>

<body>
	<!-- Header -->
	<!-- User nav bar -->
	<?php include '../header&footer_includes/navbar_users.php';?>


	<!-- Body -->
	<div class="container-fluid">
  	<div class="container-home-profile col-md-12">
      <div class="col-md-5">
         <img class="profilePicture" src=<?php echo $direccionBase.$photo; ?> alt="pp"/> 
      </div>
      <div class="col-md-7">
        <div class="profile-info">
          <div class="profile-header">
            <h2><strong><?php echo $nombre; ?></strong></h2>
            <label>Cancún Quintana Roo</label>
            <button class="btn-link" type="button" title="Denunciar a este usuario">
							<a title="Editar perfil" href=<?php echo $direccionBase."v2/profile/settings-account";?>><h4>Editar perfil<h4></a>
              <!-- <Link to="/user/settings-account/"><h4>Editar perfil</h4></Link> -->
            </button>
          </div>
          <div class="profile-biography">
						<?php
								$profile = "SELECT * FROM users WHERE id_user=$id_usua";
								$resultProf = mysqli_query($conexion,$profile);
				   		   $dato = mysqli_fetch_array($resultProf);
								 $dato["biography"];
						 ?>
					</div>

        </div>
        <!-- {/* Mis reservaciones */}
        <div class="profile-trips">
          <h3>Tus viajes</h3>
          <img alt="icon-trips" src="<?php echo $direccionBase."v2/static/img/icons/trips.png";?>" />

           <div>
						{data.getReservesUser.map(item => (
              <div class="profile-rTrip" key={item.id}>
                <h4>Disfrutando cada experiencia en Imviatori</h4>
              </div>
            ))}
          </div>
        </div> -->

        <!-- {/* Las experiencias del anfitrion */} -->
        <div class="profile-trips">
          <h3>Tu experiencias</h3>
          <img alt="icon-trips" src="<?php echo $direccionBase.'v2/static/img/icons/trips.png';?>" />
          	<div>
              <div class="profile-rTrip">
								<?php
										$experienceQuery = "SELECT name FROM experiences WHERE id_user=$id_usua";
										$result = mysqli_query($conexion,$experienceQuery);
										 while ($row = mysqli_fetch_array($result)) {
											 echo "<h4>".$row["name"]."</h4>";
										 }
										 mysqli_close($conexion);
								 ?>
              </div>
          </div>
        </div>

      </div>
    </div>
	</div>


	<!-- Footer -->
	<!-- <?php include '../header&footer_includes/footer.php';?> -->
</body>
</html>
