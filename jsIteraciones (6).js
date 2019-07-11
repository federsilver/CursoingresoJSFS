function mostrar()
{

	var numero;
	var suma = 0;
	var promedio;
	var contador;

	

	while( contador <5){

		numero = parseInt(prompt("Ingrese un número: "));
		suma += numero;

		contador ++;
	}

promedio = suma/5

document.getElementById('suma').value = suma;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN