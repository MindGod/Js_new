var mass = [];
mass[0] = "Monkey";
mass[1] = "Rooster";
mass[2] = "Dog";
mass[3] = "Pig";
mass[4] = "Rat";
mass[5] = "Ox";
mass[6] = "Tiger";
mass[7] = "Hair";
mass[8] = "Dragon";
mass[9] = "Snake";
mass[10] = "Horse";
mass[11] = 'Sheep';
var zodiac = 0;

var userChoice = parseInt(prompt("When were u born?"));

if (userChoice >= 0){
	zodiac = userChoice % 12;
}

document.getElementById('text').innerHTML = mass[zodiac];

