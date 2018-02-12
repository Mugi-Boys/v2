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
  <div class = "container-fluid">
        <div class="col-xs-12 col-md-12 sticky">

            <div class="settingsBox">
              <div class="titleSettingsBox">
                <h3>Opiniones</h3>
              </div>

              <div class="col-md-6 col-lg-6 col-md-12">
                <h3>Que opinan sobre mi</h3>
                <?php
                     $myReviews = "SELECT *
                     FROM reviews
                     INNER JOIN experiences ON reviews.id_experience = experiences.id_experience
                     INNER JOIN users ON reviews.id_user = users.id_user
                     WHERE experiences.id_user = $id_usua";

                     $myReviewsR = mysqli_query($conexion,$myReviewsR);
 										 while ($row = mysqli_fetch_array($myReviewsR)) {
                 ?>
                     <div class="col-md-12">
                       <div class="col-md-2">
                         <img class="rounded" src="<?php echo $direccionBase.$photo; ?>" alt="">
                       </div>
                       <div class="col-md-8">
                         <p><strong><?php echo $row["name"]; ?></strong> date</p>
                         <p>review</p>
                         <div class="">
                           score
                         </div>
                       </div>
                     </div>
                <?php } ?>

              </div>

              <div class="col-md-6 col-lg-6 col-md-12">
                <h3>Lo que he opinado</h3>
                <?php
                    $myOpinions="SELECT * FROM reviews where id_user=$id_usua";
                    $result = mysqli_query($conexion,$myOpinions);
										 while ($row = mysqli_fetch_array($result)) {
											 echo "<h4>".$row["review"]."</h4>";
										 }
                 ?>
              </div>

            </div>
        </div>
      </div>

      <?php mysqli_close($conexion); ?>

	<!-- Footer -->
	<!-- <?php include '../header&footer_includes/footer.php';?> -->
</body>
</html>
