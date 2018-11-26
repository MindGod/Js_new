var userChoice = prompt("Number?");
console.log(userChoice);
var result = '';
if (userChoice %2 == 0){
	result = 'the number is even';
} else {
	result = 'the number is odd';
}
document.getElementById('text').innerHTML = result;