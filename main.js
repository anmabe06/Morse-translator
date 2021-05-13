//Code by anmabe06
//May 13th of 2021


var codigoMorse = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '--.--', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----', '/', ' '];

var codigoTexto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ', ''];

function traductorTextoMorse(cadena){
	var auxiliar = '';
	letras = cadena.split('');
	
	for(i = 0; i < letras.length; i++){
		var index = codigoTexto.indexOf(letras[i]);
		auxiliar = auxiliar + codigoMorse[index] + " ";
	}
	console.log(auxiliar);
}

function traductorMorseTexto(cadena){
	var auxiliar = '';
	caracteres = cadena.split(' ');

	for(i = 0; i < caracteres.length; i++){
		var index = codigoMorse.indexOf(caracteres[i]);
		auxiliar = auxiliar + codigoTexto[index];
	}
	console.log(auxiliar);
}

function start(){
	var choose = prompt("Qué quieres traducir?\n Morse --> Texto [1]\n Texto --> Morse [2]\n\n");

	switch(choose){
		case "1":
			var input = prompt("Introduce el código (caracteres separados por un espacio; cadenas separadas por /)");
			traductorMorseTexto(input);
			console.log('\n___________________________\n\n');
			break;
		
		case "2":
			var input = prompt("Introduce la cadena\n");
			input = input.toLowerCase();
			traductorTextoMorse(input);
			console.log('\n___________________________\n\n');
			break;

		default:
			console.log('\n___________________________\n\n');
			console.log("\nPor favor, selecciona 1 o 2");
			break;
	}
	start();
}

start();
