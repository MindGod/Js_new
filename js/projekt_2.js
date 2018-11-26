var userChoice = parseInt(prompt("Human years"));
console.log(userChoice);
var add = 4 * userChoice;
var result;
if (userChoice < 2){
	result = 10.5;
} else if (userChoice == 2){
	result = 21;
} else if (userChoice > 2){
	result = 21 + add;
}

document.getElementById('text').innerHTML = result;