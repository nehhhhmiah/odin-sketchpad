$(document).ready(function() {
	gridSetup();
});

$('#white').click(function() {
	gridSetup();
	setColor('white');
});

$('#gradual').click(function() {
	gridSetup();
	setColor('gradual');
});

$('#color').click(function() {
	gridSetup();
	setColor('color')
});

function gridSetup () {
	clearGrid();
	var sideLength = prompt("Please enter the length of your grid (1 <= n <= 64):");
	if (sideLength > 0 && sideLength < 65) {
		createGrid(sideLength);
	}
	else {
		while (sideLength < 1 || sideLength >64 ) {
			sideLength = prompt("The number entered was out of range. Please enter a number between 1 and 64:");
		}
	}
}

function clearGrid () {
	$('.grid').remove();
	$marker = $('.marker');
	$marker.append("<div class='grid'></div>");
}

function createGrid (length) {
	for (var columns = 0; columns<length; columns++) {
		
	}
}

function setColor (option) {

}

function randomColor () {

}

