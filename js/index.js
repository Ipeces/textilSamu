window.onload=inicio;

function inicio(){
	document.formulario.prim.onkeypress=solodigitos;
	document.formulario.segun.onkeypress=solodigitos;
	document.formulario.crear.onclick=crearTejido;
}

function solodigitos(evento){
	var evento=evento || window.event;
	var dato=String.fromCharCode(evento.charCode);
	if(dato <"0"|| dato >"9")
	evento.preventDefault();
	}
function crearTejido(){
	let prim=parseInt(document.formulario.prim.value);
	let segun=parseInt(document.formulario.segun.value);
	let tamanno=(prim+segun);
	alert(tamanno);
}


