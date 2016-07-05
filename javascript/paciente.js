$(document).ready(init());

function init(){
	$(".centrosMedicos").hide();
	$(".misExamenes").hide();
	$("#misDatos").on("click", mostrarMisDatos);
	$("#misExamenes").on("click", mostrarMisExamenes);
	$("#centrosMedicos").on("click", mostrarCentrosMedicos);

	var urlPaciente="json/paciente.json";
	$.getJSON(urlPaciente,function(respuesta){
		respuesta.forEach(function(paciente){
			$(".nombres").append(paciente.nombre1 + " " + paciente.nombre2);
			$(".apellidos").append(paciente.apellido1 + " " + paciente.apellido2);
			$(".cedula").append(paciente.cedula);
			$(".email").append(paciente.email);
			$(".direccion").append(paciente.direccion);
			$(".telefono").append(paciente.telefono);
			$(".foto-perfil").attr("src", paciente.fotoPerfil)
		});
	});
}

function mostrarMisDatos(){
	$(".datos").show();
	$(".misExamenes").hide();
	$(".centrosMedicos").hide();
}

function mostrarMisExamenes(){
	$(".datos").hide();
	$(".misExamenes").show();
	$(".centrosMedicos").hide();
}

function mostrarCentrosMedicos(){
	$(".datos").hide();
	$(".misExamenes").hide();
	$(".centrosMedicos").show();
}