window.onload=inicio;

function inicio(){
	document.formulario.prim.onkeypress=solodigitos;
	document.formulario.segun.onkeypress=solodigitos;
	document.formulario.crear.onclick=creacionTejido;
}

function solodigitos(evento){
	var evento=evento || window.event;
	var dato=String.fromCharCode(evento.charCode);
	if(dato <"0"|| dato >"9")
	evento.preventDefault();
	}
function creacionTejido(){
	let prim = parseInt(document.formulario.prim.value);
	let segun =parseInt(document.formulario.segun.value);

	let  tamanno=(prim+segun);
	crearTejido(tamanno);
	
}



function crearTejido(tamanno){
	let tamTot = 500;
    let tamaxrect = tamTot/tamanno;
    let canvas = document.getElementById('tejido');
    let ctx = canvas.getContext('2d');
    let x = 0;
    let y = 0;
    let width = tamaxrect;
    let height = tamaxrect;
	for (let j = 0; j < tamanno; j++) {
		x=0;
		for (let i = 0; i < tamanno; i++) {
			
		
        ctx.fillStyle = "#000000";
		ctx.fillRect(x, y, width, height);
        x+=tamaxrect;
		}
		y+=tamaxrect;
		
	}
}