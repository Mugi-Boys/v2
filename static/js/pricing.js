/*Global Variables*/
var prices 		= {};
var currency 	= 'MXN'

Number.prototype.format = function(n, x) {
	var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return '$' + this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,') + ' ' + currency;
};

jQuery(document).ready(function(){
	var ps_date 	= jQuery("#ps_date").val();
	var ps_paxes 	= jQuery("#ps_paxes").val();
	var ps_schedule = jQuery("#ps_schedule").val();
	
	if(ps_date)
		jQuery("#date").val(ps_date);
		
	if(ps_paxes)
		jQuery("#paxes").val(ps_paxes);

	if(ps_schedule)
		jQuery("#schedule").val(ps_schedule);
	
	getExperiencePrices();
	
	jQuery("#paxes, #schedule").change(function(){
		getExperiencePrices();
	});
});

function getExperiencePrices(){
	var selectedExperience 	= jQuery("#experienceId").val();
	
	var params = {
		action 		: 'getPricesByExperienceJson',
		experience 	: selectedExperience
	}
	
	jQuery.ajax({
		type		: 'POST',
		url			: '/wp-admin/admin-ajax.php',
		dataType 	: 'JSON',
		encode		: true,
		data 		: params,
		success 	: function(data) {
			if(data){
				prices = data;
			}
			updatePricing();
		}
	});
	
}

function updatePricing(){
	var date 	= jQuery("#date").val();
	var paxes 	= parseInt(jQuery("#paxes option:selected").val());
	var schedule= jQuery("#schedule option:selected").val();

	if(prices.discount > 0)
		prices.price = prices.priceWithDiscount;

	var total	= paxes * prices.price;
	
	jQuery("#reviewDate").text(date);
	jQuery("#reviewSchedule").text(schedule);
	jQuery("#reviewPaxes").text(paxes);
	jQuery("#reviewPricePax").text(prices.price.format(2));
	jQuery("#reviewTotal").text(total.format(2));
}

jQuery( "#payform" ).submit(function(e) {
	e.preventDefault();

	if(jQuery("#payform").valid()){
		jQuery("#loader").show();
		
		var reservationData = {
			experience	: jQuery("#experienceId").val(),
			date		: jQuery("#date").val(),
			schedule 	: jQuery("#schedule option:selected").val(),
			paxes		: jQuery("#paxes option:selected").val(),
			name		: jQuery("#name").val(),
			last_name	: jQuery("#last_name").val(),
			email		: jQuery("#email").val(),
			phone		: jQuery("#phone").val(),
			payMethod 	: jQuery("#payMethod").val(),
			language	: jQuery("#ps_language").val()
		}
		
		/*Do Checkout*/
		jQuery.ajax({
			type		: "POST",
			url 		: "/backend/checkout.php",
			data 		: reservationData,
			dataType	: 'JSON',
			encode		: true,
			success		: function(data){
				switch(data.paymethod){
					case 'PAYPAL':
						window.location.replace(data.url);
						break;
					case 'CASH':
						comproPagoInstructions(data.instructions);
						break;	
				}
			},
			error 		: function(data, textStatus, jqXHR){
				jQuery("#loader").hide();
				
				swal({
				  title: 'Ops!',
				  type: 'error',
				  html:
				    'Parece que se ha producido un error al realizar la compra, vuelve a intentarlo.<br> '
				});
			}
		});
	}
});

jQuery("#payform").validate({
    rules: {
        name			: "required",
        last_name		: "required",
        email			: {
            required: true,
            email: true
        },
        phone			: "required",
        date			: "required",
        paxes			: "required"
    },
    messages: {
        name			: "Ingrese su nombre",
        last_name		: "Ingrese su apellido",
        email			: "Ingrese una dirección de correo válida",
        phone			: "Ingrese un teléfono",
        date			: "Ingrese una fecha para su experiencia",
        paxes			: "Seleccione la cantidad de viajeros"
    }
});

function comproPagoInstructions(instructions) {
	var cpInstructions 	= JSON.parse(instructions);
	var html		 	= "";
	
	html += '<h2>Completa tu pago y termina el proceso de reserva de tu experiencia</h2>';

	html += '<ul>';
		html += '<li><strong>Folio de Pago: </strong>' + cpInstructions.details.order_reference_number + '</li>';
		html += '<li><strong>Pagar en: </strong>' + cpInstructions.details.payment_store + '</li>';
		html += '<li><strong>Cantidad a pagar: </strong>' + cpInstructions.details.payment_amount + '</li>';
	html += '</ul>';

	html += '<p>' + cpInstructions.description + '</p>';
	
	html += '<ol>';
		html += '<li>' + cpInstructions.step_1 + '</li>';
		html += '<li>' + cpInstructions.step_2 + '</li>';
		html += '<li>' + cpInstructions.step_3 + '</li>';
	html += '</ol>'; 
	
	html += '<ul>';
		html += '<li>' + cpInstructions.note_confirmation + '</li>';
		html += '<li>' + cpInstructions.note_expiration_date + '</li>';
		html += '<li>' + cpInstructions.note_extra_comition + '</li>';
	html += '</ul>'; 

	html += '<a href="/" class="btn btn-magenta">Regresar al inicio</a>';
	
  	jQuery(".cp-steps").html(html);
  	jQuery(".bf-steps").hide();
  	
  	jQuery( ".cp-instructions" ).slideToggle( "slow", function() {
    	jQuery("#loader").hide();
  	});
}