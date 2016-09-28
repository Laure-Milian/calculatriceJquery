function valider() {
	return false;
}

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

/*Autre manière d'écrire :
$("button").click(Nomdefonction);
function Nomdefonction() {
	console.log("un truc");
}*/

$("button").click(function() {

	var a = parseInt($("#Nombre1").val(), 10);
	var b = parseInt($("#Nombre2").val(), 10);

	var operation = $("#selectOperation").val();

	if (operation === "+") {
		var result = add(a, b);
	} 

	else if (operation === "-") {
		var result = substract(a, b);
	} 

	else if (operation === "*") {
		var result = multiply(a, b);
	}

	else if (operation === "/") {
		var result = divide(a,b);
	}

	console.log(result);
	$("#result").html(result);
});

