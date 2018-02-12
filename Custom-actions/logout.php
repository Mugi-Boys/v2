<?php

      session_start();
      session_unset();
      session_destroy();
      setcookie( "mi_cookie",  "" ,  time()-3600, "/");
      header("location: /ImviatoriTI/site/");
 ?>
