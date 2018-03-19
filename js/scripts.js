

//first way

function drawTree(rows) {
	var stars = '';
	for (var i = 1; i <= rows; i++) {
		stars = '';
		for (var j = 0; j < i; j++) {
			stars += '*';
		}
		console.log(stars);
	}
}

drawTree(10);
//second way 

/*
function drawChristmassTree (rows) {
	var currentRowContent ='',
		result = '\n';

	for (var i = 1; i <= rows; i++) {
		currentRowContent='';

		for (var spaces = 0; spaces < rows - row; spaces++) {
			currentRowContent += ' ';
		}

		for (var starsAmount = 0; starsAmount < row * 2 - 1; starsAmount++) {
			currentRowContent += '*';
		}

		result += currentRowContent + '\n';
	}

	console.log(result);

}

drawChristmassTree(10);
*/


//third way 

/*

function drawTree(rows) {
	for (val row = 1; row <= rows; row++) {
	console.log (' '.repeat(rows-row) + '*'.repeat(row * 2 - 1));

	}
}

drawTree(10);

*/