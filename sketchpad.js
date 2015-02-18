$(document).ready(function() {
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
		setColor('color');
	});
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
	var $marker = $('.marker');

}

function createGrid (length) {
	var blockDimension = 960/length;
	for (var columns = 0; columns < length; columns++) {
		for (var rows = 0; rows < length; rows++) {
			var $block = $('<div class="grid"></div>');
			$('.marker').append($block);
			($block).css({"width": blockDimension +"px", "height": blockDimension + "px"});
		}
	}
}

function setColor (option) {
	if (option === 'white') {
		$('.grid').mouseenter(function() {
			$(this).css("background-color", "white");
		});
	}
	else if (option === 'gradual') {
		$('.grid').mouseenter(function() {
			$(this).css("opacity", $(this).css("opacity") * 0.75);
		});
	}
	else if (option === 'color') {
		$('.grid').mouseenter(function() {
			$(this).css("background-color", randomColor());
		});
	}
}


function randomColor () {
	var red = Math.floor((Math.random() * 255)+1);
	var green = Math.floor((Math.random() * 255)+1);
	var blue = Math.floor((Math.random() * 255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";
}

