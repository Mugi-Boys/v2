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

                     $myReviewsR = mysqli_query($conexion,$myReviews);
 										 while ($row = mysqli_fetch_array($myReviewsR)) {
                 ?>
                     <div class="col-md-12">
                       <div class="col-md-2">
                         <img class="img-circle" src="<?php echo $direccionBase.$photo; ?>" alt="">
                       </div>
                       <div class="col-md-8">
                         <p><strong><?php echo $row["name"]; ?></strong> <?php echo $row["date"]; ?></p>
                         <p><?php echo $row["review"]; ?></p>
                         <div class="">
                           <?php echo $row["score"]; ?>
                         </div>
                       </div>
                     </div>
                <?php } ?>

              </div>

              <div class="col-md-6 col-lg-6 col-md-12">
                <h3>Lo que he opinado</h3>
								<?php
                     $myOpinions = "SELECT *
                     FROM reviews
                     INNER JOIN experiences ON reviews.id_experience = experiences.id_experience
                     INNER JOIN users ON reviews.id_user = users.id_user
                     WHERE reviews.id_user = $id_usua";

                     $myOpinionsR = mysqli_query($conexion,$myOpinions);
 										 while ($row = mysqli_fetch_array($myOpinionsR)) {
                 ?>
                     <div class="col-md-12">
                       <div class="col-md-2">
                         <img class="img-circle" src="<?php echo $direccionBase."v2/static/img/icons/natural.jpg"; ?>" alt="">
                       </div>
                       <div class="col-md-8">
                         <p><strong><?php echo $row["name"]; ?></strong> <?php echo $row["date"]; ?></p>
                         <p><?php echo $row["review"]; ?></p>
                         <div class="">
                           <?php echo $row["score"]; ?>
                         </div>
                       </div>
                     </div>
                <?php } ?>
              </div>

            </div>
        </div>
      </div>

      <?php mysqli_close($conexion); ?>

	<!-- Footer -->
	<!-- <?php include '../header&footer_includes/footer.php';?> -->
</body>
</html>
