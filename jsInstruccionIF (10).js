function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota = Math.floor( Math.random() * 10 + 1);

	if (nota > 8){ 
	alert("Nota: " + nota + " Excelente")
}
	else if (nota < 4) {
	alert("Nota: " + nota + " Vamos, la próxima se puede")
	}
	//si no está entre los anteoriores, es entre 1 y 3, entonces
	else {
	alert("Nota: " + nota + " Aprobó");
}
}//FIN DE LA FUNCIÓN