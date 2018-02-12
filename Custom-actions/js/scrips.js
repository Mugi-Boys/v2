//Entrada de los usuarios
function Logear(){

    var pass        =   $("#pass").val();
    var email       =   $("#correo").val();
    var last_site   =   $("#last_site").val();
     $.ajax({
          type: "POST",
          url: "log.php",
          data:("correo="+email+"&pass="+pass),
          dataType: "html",
          beforeSend: function(){
                  $("#boton").hide();
									$("#carga").html('<b>Iniciando sesión</b> <img src="media/ajax-loader.gif"/>').show();
                                },
          success: function(data){
			  if(data == "1"){
          if (last_site=="http:///ImviatoriTI/site/v2/custom-actions/") {
            window.location="http:///ImviatoriTI/site/";
          }else {
  					window.location=last_site;
          }
				}else{
				      $("#boton").show();
				      $("#alerta").show();
							$("#carga").html('').hide();

				}
                        }
             });
}
//registro de usuarios
function Registro(){

  validaTexto("usuario"); validaTexto("apellidos");
  validaMail("correo");  validaContra("pass");  validaContra("repass");
  if(!validaTexto("usuario") ||!validaTexto("apellidos") || !validaMail("correo") || !validaContra("pass") || !validaContra("repass") ){
      return false;
    }
    else{
        var user = $("#usuario").val();
        var apellidos = $("#apellidos").val();
        var pass = $("#pass").val();
        var repass = $("#repass").val();
        var email = $("#correo").val();
        var tel = $("#telefono").val();
        var dir = $("#direccion").val();
        var tipo = $("#tipo").val();
         $.ajax({
              type: "POST",
              url: "funcionUsuarios.php",
              data: ("tarea=inserta"+"&correo="+email+"&pass="+pass+"&repass="+repass+"&usuario="+user+"&apellidos="+apellidos+"&telefono="+tel+"&direccion="+dir+"&tipo="+tipo),
              dataType: "html",
              beforeSend: function(){
                      $("#boton").hide();
    									$("#carga").html('<img src="media/ajax-loader.gif"/>').show();
                    },
              success: function(data){
              			  if(data == "1"){
                      $("#alerta").show();
              				$("#registro").hide();
              				}else{
                        alert("estoy aqui y no se por que "+data);
              				      $("#boton").show();
              							$("#carga").html('').hide();
              				    }
                        }
                 });
               }
}


//modificacion de usuarios
function Musuario(){

  validaTexto("nombre"); validaTexto("apellidos");
  validaMail("correo");
  if(!validaTexto("nombre") ||!validaTexto("apellidos") || !validaMail("correo")){
return false;
}
else{
    var iduser = $("#idusua").val();
    var user = $("#nombre").val();
    var apellidos = $("#apellidos").val();
    var email = $("#correo").val();
    var tel = $("#tel").val();
    var dir = $("#dir").val();
     $.ajax({
          type: "POST",
          url: "funcionUsuarios.php",
          data: ("tarea=modifica"+"&idusua="+iduser+"&correo="+email+"&usuario="+user+"&apellidos="+apellidos+"&telefono="+tel+"&direccion="+dir),
          dataType: "html",
          beforeSend: function(){
                  $("#boton").hide();
									$("#carga").html('<img src="media/ajax-loader2.gif"/>').show();
                                },
          success: function(data){
          location.reload();
                        }
             });
           }
}




// el que genera los campos que se mostraran en los productos
function Cproducto(){
  var tipo = $("#tipo").val();
      var user = $("#idusua").val();
  $.ajax({
      type: "POST",
      url: "funcionProductos.php",
      data: ("dato="+tipo+"&tarea=consulta"+"&idusua="+user),
      dataType: "html",
      success: function(data){
        $("#productos").html(data);
                    }
  });
}
//registro de usuarios
function Ipro(){
            var formData = new FormData(document.getElementById("Iproducto"));
            formData.append("tarea", "insertar");
     $.ajax({
          url: "funcionProductos.php",
                type: "post",
                dataType: "html",
                data: formData,
                cache: false,
                contentType: false,
	              processData: false,
          beforeSend: function(){
                  $("#boton").hide();
									$("#carga").html('<img src="media/ajax-loader2.gif"/>').show();
                                },
          success: function(data){
			  if(data == "1"){
        $("#alerta").show();
				$("#Iproducto").hide();
				}else{

				      $("#boton").show();
							$("#carga").html('').hide();

				}
                        }
             });
}
//funcion para Eliminar productos de la base de datos
function Epro(id){

  var sig = id+1;
  $.ajax({
      type: "POST",
      url: "funcionProductos.php",
      data: ("tarea=Elimina"+"&idprod="+id),
      dataType: "html",
      success: function(data){
        Cproducto();
        $("#d"+sig).focus();
        }
  });
}

//funcion para Modificar productos de la base de datos
function Mpro(id){
              var formData = new FormData(document.getElementById("Mproducto"));
              formData.append("tarea", "ModificarPro");
       $.ajax({
            url: "funcionProductos.php",
                  type: "post",
                  dataType: "html",
                  data: formData,
                  cache: false,
                  contentType: false,
  	              processData: false,
            beforeSend: function(){
                    $("#boton").hide();
  									$("#carga").html('<img src="media/ajax-loader2.gif"/>').show();
                                  },
            success: function(data){
              console.log(data);
  			  if(data == "1"){
          $("#alerta").show();
  				$("#Mproducto").hide();
  				}else{

  				      $("#boton").show();
  							$("#carga").html('').hide();

  				}
                          }
               });
}
//funcion para agregar productos al carrito
function Acarrito(id){

  var val = $("#n"+id).val();
      var user = $("#idusua").val();
  $.ajax({
      type: "POST",
      url: "funcionCarrito.php",
      data: ("tarea=Acarrito"+"&idprod="+id+"&cant="+val+"&idusua="+user),
      dataType: "html",
      success: function(data){
        Ccarrito();
        Cproducto();
        $("#d"+id).focus();
                    }
  });
}
//funcion que muestra el numero de articulos en el carrito
function Ccarrito(){
      var user = $("#idusua").val();
  $.ajax({
      type: "POST",
      url: "funcionCarrito.php",
      data: ("tarea=Ccarrito"+"&idusua="+user),
      dataType: "html",
      success: function(data){
        $("#NUcar").html(data);
                    }
  });
}

//funcion para agregar productos al carrito
function Carrito(){
      var user = $("#idusua").val();
  $.ajax({
      type: "POST",
      url: "funcionCarrito.php",
      data: ("tarea=Carrito"+"&idusua="+user),
      dataType: "html",
      success: function(data){
        $("#contenido").html(data);
                    }
  });
}

//funcion para Eliminar productos de la lsita del carrito
function Ecar(id){
  var ant = $("#ant").val();
  var sig=ant+1;
  $.ajax({
      type: "POST",
      url: "funcionCarrito.php",
      data: ("tarea=Elimina"+"&idprod="+id),
      dataType: "html",
      success: function(data){
        Ccarrito();
        Carrito();
        $("#d"+sig).focus();
        }
  });
}


//comprueba que el correo introducido no se haya registrado anteriormente
function Ccorreo(){
    if(validaMail("correo")==true){
    var email = $("#correo").val();
            $.ajax({
                type: "POST",
                url: "comprobar.php",
                data: ("dato="+email),
                beforeSend: function(){

                  $("#iconocorreo").remove(); $("#correo").parent().children("span").html('Verificando <img src="media/ajax-loader.gif"/>').show();
                },
				success: function(data){
                  $("#iconocorreo").remove();
                  $("#correo").parent().parent().removeClass("has-error");
                  $("#correo").parent().parent().addClass("has-success has-feedback"); $("#correo").parent().children("span").html('').hide();
                  $("#correo").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-ok form-control-feedback'></span>");

									if(data == "2"){

                  $("#iconocorreo").remove();
                  $("#correo").parent().parent().addClass("has-error has-feedback");
                  $("#correo").parent().children("span").html('El correo usado ya existe.').show();
                  $("#correo").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-remove form-control-feedback'></span>");
					  document.getElementById("correo").value = ""; $("#correo").focus();
													}
                              }
            });
    }
    }

	//comprobamos si el password introducido coincide con la comprobacion
function repass(e) {
        var pass = $("#pass").val();
        var re_pass=$("#repass").val();
	 if(pass != re_pass)
        {
                  $("#iconorepass").remove();
                  $("#repass").parent().parent().addClass("has-error has-feedback");
                  $("#repass").parent().children("span").html('las contraseñas no coinciden').show();
                  $("#repass").parent().append("<span id='iconorepass' class='glyphicon glyphicon-remove form-control-feedback'></span>");
            return false;
        }
        else if(pass == re_pass)
        {
                  $("#iconorepass").remove();
                  $("#repass").parent().parent().removeClass("has-error has-feedback");
                  $("#repass").parent().parent().addClass("has-success has-feedback");
                  $("#repass").parent().children("span").html('').show();
                  $("#repass").parent().append("<span id='iconorepass' class='glyphicon glyphicon-ok form-control-feedback'></span>");
            return true;
	// Si el script ha llegado a este punto, todas las condiciones
	// se han cumplido, por lo que se devuelve el valor true

        }
    }//fin keyup repass


//funciones que dan aviso sobre si se puede usar o no el carrito
function aviso(){
	document.getElementById("Aventana").style.visibility="visible";
}
function Caviso(){
	document.getElementById("Aventana").style.visibility="hidden";
}

//esta funcion es para comprobar si el correo existe para cambiar la contraseña del usuario
function cambiar() {
    Caviso();
    var email = $("#mail").val();
                 $.ajax({
                type: "POST",
                url: "restablecer.php",
                data: "dato="+email,
                beforeSend: function(){

                  $("#iconocorreo").remove(); $("#mail").parent().children("span").html('<font class="sombra">Verificando</font> <img src="media/ajax-loader.gif"/>').show();
                },
				success: function(data){
                       if(data == "0"){                              $("#iconocorreo").remove();
                  $("#mail").parent().parent().addClass("has-error has-feedback");
                  $("#mail").parent().children("span").html('No puede dejar el campo vacio.').show();
                  $("#mail").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-remove form-control-feedback'></span>");
													}
						if(data == "1"){                                        $("#iconocorreo").remove();
                  $("#mail").parent().parent().addClass("has-error has-feedback");
                  $("#mail").parent().children("span").html('Este correo no esta registrado.').show();
                  $("#mail").parent().append("<span id='iconocorreo' class='glyphicon glyphicon-remove form-control-feedback'></span>");
													}
						if(data == "2"){
							window.location="login.html";
													}
                              }
            });
		}


//funcion para validar los campos de texto
function validaTexto(id){
    var letras= /^[a-zA-Z\s]+$/;
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algun caracter").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;

    }
    else if( !letras.test($("#"+id).val()) ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo es unicamente de letras").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
    }
    else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para validar los campos de texto que son numericos
function validaNum(id){

    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algun caracter").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;

    }
    else if( !(/^\+\d{2,3}\s\d{9}$/.test($("#"+id).val()))){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Patron correcto del numero +34 900900900").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;

    }
   else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para validar los campos de texto en los que introducimos correos
function validaMail(id){
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algun caracter").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;

    }
    else if( !emailreg.test($("#"+id).val()) ) {
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("ingresa un email correcto como mail@ejemplo.com").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
    }
    else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para validar los campos de texto de tipo contraseña
function validaContra(id){
    var contra= /^[a-zA-Z0-9]+$/;
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo no puede estar vacio.").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;

    }
    else if($("#"+id).val().length < 6){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo debe contener al menos 6 caracteres").show();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
        return false;
    }
    else{
        $("#icono"+id).remove();
        $("#"+id).parent().parent().removeClass("has-error");
        $("#"+id).parent().parent().addClass("has-success  has-feedback");
        $("#"+id).parent().children("span").text("").hide();
        $("#"+id).parent().append("<span id='icono"+id+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
        return true;
    }
}

//funcion para ver si estan activadas las mayusculas en algun campo
function Mayusculas(e){
var elemento = event.srcElement ? event.srcElement : event.target;
    var oID= elemento.id;
kc=e.keyCode?e.keyCode:e.which;
sk=e.shiftKey?e.shiftKey:((kc==16)?true:false);
    if(((kc>=65&&kc<=90)&&!sk)||((kc>=97&&kc<=122)&&sk ))
    {
        $("#icono"+oID).remove();
        $("#"+oID).parent().addClass("has-warning  has-feedback");
        $("#"+oID).parent().children("span").text("Las mayusculas estan activadas").show();
        $("#"+oID).parent().append("<span id='icono"+oID+"' class='glyphicon glyphicon-exclamation-sign form-control-feedback'></span>");
    }
    else{
        $("#"+oID).parent().removeClass("has-warning  has-feedback");
        $("#"+oID).parent().children("span").text("").hide();
    }
}
