// funciones para abrir el modal
function abrir_modal(url)
{
	$('#Aventana').load(url, function()
	{
		document.getElementById("Aventana").style.visibility="visible";
	});
	return false;
}

function cerrar_modal()
{
	document.getElementById("Aventana").style.visibility="hidden";
	return false;
}
//funcion para validar los campos de texto
function validaTexto(id){
    var letras= /^[a-zA-Z\s]+$/;
    if( $("#"+id).val() == null || $("#"+id).val() == "" ){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Debe ingresar algún caracter").show();
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
    else if($("#"+id).val().length < 8){
        $("#icono"+id).remove();
        $("#"+id).parent().parent().addClass("has-error has-feedback");
        $("#"+id).parent().children("span").text("Este campo debe contener al menos 8 caracteres").show();
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


	//comprobamos si el id_password introducido coincide con la comprobacion
function repass(e) {
        var pass = $("#id_password1").val();
        var re_pass=$("#id_password2").val();
	 if(pass != re_pass)
        {
                  $("#iconoid_password2").remove();
                  $("#id_password2").parent().parent().addClass("has-error has-feedback");
                  $("#id_password2").parent().children("span").html('las contraseñas no coinciden').show();
                  $("#id_password2").parent().append("<span id='iconoid_password2' class='glyphicon glyphicon-remove form-control-feedback'></span>");
            return false;
        }
        else if(pass == re_pass)
        {
                  $("#iconoid_password2").remove();
                  $("#id_password2").parent().parent().removeClass("has-error has-feedback");
                  $("#id_password2").parent().parent().addClass("has-success has-feedback");
                  $("#id_password2").parent().children("span").html('').show();
                  $("#id_password2").parent().append("<span id='iconoid_password2' class='glyphicon glyphicon-ok form-control-feedback'></span>");
            return true;
	// Si el script ha llegado a este punto, todas las condiciones
	// se han cumplido, por lo que se devuelve el valor true

        }
    }//fin keyup repass


///--------------------------------- funciones para el formulario por pasos -------------------------------------///


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
		// This function will display the specified tab of the form ...
		var x = document.getElementsByClassName("tab");
		x[n].style.display = "block";
			// ... and fix the Previous/Next buttons:
		if (n == 0) {
		  document.getElementById("prevBtn").style.display = "none";
		} else {
		  document.getElementById("prevBtn").style.display = "inline";
		}
		if (n == (x.length - 1)) {
		  document.getElementById("nextBtn").style.display = "none";
		  document.getElementById("ok").style.display = "inline";
		} else {
		  document.getElementById("nextBtn").style.display = "inline";
		  document.getElementById("ok").style.display = "none";
		}
		// ... and run a function that displays the correct step indicator:
		fixStepIndicator(n)
}

function nextPrev(n) {
		// This function will figure out which tab to display
		var x = document.getElementsByClassName("tab");
		// Exit the function if any field in the current tab is invalid:
		if (n == 1 && !validateForm()) return false;
		// Hide the current tab:
		x[currentTab].style.display = "none";
		// Increase or decrease the current tab by 1:
		currentTab = currentTab + n;
		// if you have reached the end of the form... :
		if (currentTab >= x.length) {
		  //...the form gets submitted:
		  document.getElementById("regForm").submit();
		  return false;
		}
		// Otherwise, display the correct tab:
		showTab(currentTab);
}

function validateForm() {
		// This function deals with validation of the form fields
		var x, y, i, valid = true;
		x = document.getElementsByClassName("tab");
		y = x[currentTab].getElementsByTagName("input");
		// A loop that checks every input field in the current tab:
		for (i = 0; i < y.length; i++) {
		  // If a field is empty...
		  if (y[i].value == "") {
		    // add an "invalid" class to the field:
		    y[i].className += " invalid";
		    // and set the current valid status to false:
		    valid = false;
		  }
		}
		// If the valid status is true, mark the step as finished and valid:
		if (valid) {
		  document.getElementsByClassName("step")[currentTab].className += " finish";
		}
		return valid; // return the valid status
}

function fixStepIndicator(n) {
		// This function removes the "active" class of all steps...
		var i, x = document.getElementsByClassName("step");
		for (i = 0; i < x.length; i++) {
		  x[i].className = x[i].className.replace(" active", "");
		}
		//... and adds the "active" class to the current step:
		x[n].className += " active";
}



////////////////////////// aqui estan los scrips necesarios para usar google maps ////////////////////////
var geocoder;
$(function(){
	if (navigator.geolocation)
	{
			navigator.geolocation.getCurrentPosition(getCoords, getError);
	}else {
			initialize(23.0000000, -102.0000000);
	}
	function getCoords(position)
	{
			var lat =position.coords.latitude;
			var lng =position.coords.longitude;

			initialize(lat, lng);
	}

	function getError(err)
	{
			initialize(23.0000000, -102.0000000);
	}
	function initialize(lat, lng)
	{
  		geocoder = new google.maps.Geocoder();
			var latlng = new google.maps.LatLng(lat, lng);
			var mapSettings = {
					center: latlng,
					zoom: 5,
					mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById("mapa"), mapSettings);

			var image = {
			  url: '/static/img/logos/marker.png', //ruta de la imagen
			  size: new google.maps.Size(40, 60), //tamaño de la imagen
			  origin: new google.maps.Point(0,0), //origen de la iamgen
			//el ancla de la imagen, el punto donde esta marcando, en nuestro caso el centro inferior.
			  anchor: new google.maps.Point(20, 60)
			 };
			var marker = new google.maps.Marker({
						position: latlng,
						map: map,
						draggable: true,
					  icon: image,
						title: "Arrastrame!"
				});

				google.maps.event.addListener(marker,'mouseout',function(){
						getMarkerCoords(marker);
				});
		}

		function getMarkerCoords(marker)
		{
				var markerCoords = marker.getPosition();
				$('#id_latitude').val( markerCoords.lat() );
				$('#id_longitude').val( markerCoords.lng() );
				var input = markerCoords.lat()+","+markerCoords.lng();
				codeLatLng(input);
		}
		function codeLatLng(input) {
			  var latlngStr = input.split(',', 2);
			  var lat = parseFloat(latlngStr[0]);
			  var lng = parseFloat(latlngStr[1]);
			  var latlng = new google.maps.LatLng(lat, lng);
			  geocoder.geocode({'latLng': latlng}, function(results, status) {
			    if (status == google.maps.GeocoderStatus.OK) {
			        $('#id_street_address').val(results[0].formatted_address);
							var que="", num="",route="",loc="",area="";
							for (var i = 0; i < results[0].address_components.length; i++) {
								switch (""+results[0].address_components[i].types[0]) {
									case 'street_number':
											num=results[0].address_components[i].long_name+", ";
										break;
									case 'route':
											route=results[0].address_components[i].long_name;
										break;
									case 'locality':
											loc =", "+results[0].address_components[i].long_name;
										break;
									case 'postal_code':
											$('#id_zipcode').val( results[0].address_components[i].long_name );
										break;
									case 'country':
											$('#id_country').val( results[0].address_components[i].long_name );
										break;
									case 'administrative_area_level_1':
											$('#id_state').val( results[0].address_components[i].long_name );
										break;
									case 'administrative_area_level_2':
											area = results[0].address_components[i].long_name;
										break;
								}
							}
									$('#id_street_address').val(num+route);
									$('#id_city').val(area+loc);

			    } else {
							$('#id_zipcode').val("");
							$('#id_country').val("");
							$('#id_state').val("");
							$('#id_street_address').val("");
							$('#id_city').val("");
			    }
			  });
			}
});
