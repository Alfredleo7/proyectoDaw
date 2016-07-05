

function init(){
	$(".centrosMedicos").hide();
	$(".misExamenes").hide();
	$("#misDatos").on("click", mostrarPanelMisDatos);
	$("#misExamenes").on("click", mostrarPanelMisExamenes);
	$("#centrosMedicos").on("click", mostrarPanelCentrosMedicos);

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

	var urlCentrosMedicos = "json/centrosMedicos.json";
	$.getJSON(urlCentrosMedicos,function(respuesta){
		respuesta.forEach(function(centroMedico){
			var elemento = $("<button>", {
				html: centroMedico.nombre,
				"class": "btn btn-default btn-lg btn-block btn-centroMedico",
				"id": centroMedico.nombre
			});
			elemento.on("click", mostrarDetallesCentroMedico);
			if(centroMedico.ubicacion == "Guayaquil"){
				$(".panel_guayaquil").append(elemento);
			}
			if(centroMedico.ubicacion == "Quito"){
				$(".panel_quito").append(elemento);
			}
			if(centroMedico.ubicacion == "Cuenca"){
				$(".panel_cuenca").append(elemento);
			}
		});
	});

	var urlExamenes = "json/examenes.json";
	var n=1;
	$.getJSON(urlExamenes,function(respuesta){
		respuesta.forEach(function(examen){
			var elemento = $("<tr>");
			elemento.append("<td>" + n + "</td>");
			elemento.append("<td>" + examen.fecha + "</td>");
			elemento.append("<td>" + examen.tipoExamen + "</td>");
			elemento.append("<td>" + examen.estado + "</td>");
			elemento.append("<td>" + examen.link + "</td>");
			$(".tabla-examenes").append(elemento);
			n=n+1;
		});
	});
}

function mostrarPanelMisDatos(){
	$(".datos").show();
	$(".misExamenes").hide();
	$(".centrosMedicos").hide();
}

function mostrarPanelMisExamenes(){
	$(".datos").hide();
	$(".misExamenes").show();
	$(".centrosMedicos").hide();
}

function mostrarPanelCentrosMedicos(){
	$(".datos").hide();
	$(".misExamenes").hide();
	$(".centrosMedicos").show();
}

function mostrarDetallesCentroMedico(){
	var nombre = $(this).attr("id");
	var urlCentrosMedicos = "json/centrosMedicos.json";
	$.getJSON(urlCentrosMedicos,function(respuesta){
		respuesta.forEach(function(centroMedico){
			if(nombre == centroMedico.nombre){
				$("#centro_Nombre").empty();
				$("#direccion").empty();
				$("#descripcion").empty();
				$("#horarios").empty();

				$("#centro_Nombre").append(centroMedico.nombre);
				$("#direccion").append(centroMedico.direccion);
				$("#descripcion").append(centroMedico.descripcion);
				$("#horarios").append(centroMedico.horarios);
			}
		});
	});
}

$(document).ready(init());