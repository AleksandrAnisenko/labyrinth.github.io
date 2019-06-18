var direction = 'up';
var man = [1, 1];

var mas = [ [2,2, 2, 2, 2, 2, 2, 2],
			[2,0, 2, 0, 2, 2, 0, 2],
			[2,0, 2, 0, 0, 0, 0, 2],
			[2,0, 2, 0, 2, 2, 0, 2],
			[2,0, 0, 0, 2, 0, 0, 2],
			[2,0, 2, 0, 2, 0, 2, 2],
			[2,0, 2, 0, 2, 0, 0, 2],
			[2,2, 2, 2, 2, 2, 2, 2]
];

mas[man[0]][man[1]] = 1;

var box = document.getElementById('box');

function createTable(box, mas) {
	for (var i = 0; i < mas.length; i++) {
		var tr = document.createElement('tr');

		for (var j = 0; j < mas[i].length; j++) {
			var td = document.createElement('td');
			//mas[i][j] == 1 ? td.style.backgroundColor = 'green': false;
			if (mas[i][j] == 1) {
				td.className = direction;
			}
			if (mas[i][j] == 2) {
				td.className = 'wall';
			}
			tr.appendChild(td);
		}
		box.appendChild(tr);
	}
}


createTable(box, mas);


document.onkeydown = function checkKeycode(event) {
	var keycode;
	if (!event) var event = window.event;
	if (event.keyCode) keycode = event.keyCode; // для IE
	else if (event.which) keycode = event.which; // для всех браузеров
	run(keycode);
}


function run(dir) {
	if (dir == 37) {

		if ((man[1] > 0) && (mas[man[0]][man[1]-1]!=2)) {
			mas[man[0]][man[1]] = 0;
			man[1] -= 1
			mas[man[0]][man[1]] = 1;
		}
		direction = 'left';
	}

	if (dir == 39) {

		if ((man[1] < 6) && (mas[man[0]][man[1]+1]!=2)) {
			mas[man[0]][man[1]] = 0;
			man[1] += 1
			mas[man[0]][man[1]] = 1;
		}
		direction = 'right';
	}

	if (dir == 38) {

		if ((man[0] > 0) && (mas[man[0]-1][man[1]]!=2)) {
			mas[man[0]][man[1]] = 0;
			man[0] -= 1
			mas[man[0]][man[1]] = 1;
		}
		direction = 'up';
	}

	if (dir == 40) {

		if ((man[0] < 6) && (mas[man[0]+1][man[1]]!=2)) {
			mas[man[0]][man[1]] = 0;
			man[0] += 1
			mas[man[0]][man[1]] = 1;
		}
		direction = 'down';
	}
	document.getElementById('box').innerHTML = "";
	createTable(box, mas);
}
