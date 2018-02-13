<?php include '../sesion.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>

   <title>Login</title>
   <?php include './metas.php'; ?>
</head>
<body>

    <div class="fondo">
      <img src="media/logo.png" width="50%" height="auto"/>
    </div>

  <?php
      if(isset($_COOKIE['mi_cookie'])){
        $var = json_decode($_COOKIE['mi_cookie']);
        // header('Location:'.$direccionBase);
      }
      ?>
  <!---------- Termina el header e inicia el cuerpo ---------->

    <div class="formulario col-md-5 col-sm-10 col-xs-10">
      <center>
        <form action="" onkeypress="if (event.keyCode==13){Logear()}else{}" name="login" id="login" method="POST" class="form-horizontal" role="form">
              <div class="form-group">
                  <h3>Ingresar</h3>
                  <div id="alerta" class="alert alert-danger alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>¡Ups!</strong> Al parecer tu correo o contraseña son equivocados revisalos.<br>
                    si no tienes una cuenta <a href="register.php" class="alert-link">Registrate aqui</a>.
                  </div>
              </div>
              <input type="hidden" name="last_site" id="last_site" <?php if(isset($_COOKIE['mi_cookie'])){ echo "value=".getenv('HTTP_REFERER'); }else{ echo 'value='.$direccionBase;} ?>>
              <div class="form-group">
                      <label for="NUser" class="control-label  col-md-4 col-sm-12">Correo de usuario</label>
                      <div class="col-md-6 col-sm-12">
                          <input class="form-control" id="correo"  name="correo" placeholder="ejemplo@mail.com"  required />
                      <span class="help-block"></span>
                      </div>
                  </div>
              <div class="form-group">
                      <label for="pass" class="control-label  col-md-4 col-sm-12">Contraseña</label>
                      <div class="col-md-6 col-sm-12">
                          <input type="password" class="form-control" id="pass"  name="pass" placeholder="Contraseña"  required />
                      <span class="help-block"></span>
                      </div>
                  </div>
                  <div class="form-group">
            			     <button class="boton" type="button" name="boton" id="boton" onclick="Logear()">Log in <span class="fa fa-sign-in"></button>
                       <!-- <input type="submit" name="ok" value="ingresar"> -->
                         <span id="carga"></span>
                         <br>
                          <a href=<?php echo $direccionBase."v2/custom-actions/register"; ?> ><strong>¿Aun no tienes una cuenta? Registrate</strong></a>
                         <br>
                  </div>
          </form>
      </center>
    </div>

  <!--  -------- Termina el cuerpo e inicia el footer ---------->
    <footer>
      <?php include 'pie.php'; ?>
    </footer>

  <!--scrips para el funcionamiento de las validaciones hasta el final para hacer mas veloz la carga de la pagina-->
   <script type="text/javascript">
   $( document ).ready(function() {
       $("#alerta").hide();
   });
   </script>
</body>
</html>
