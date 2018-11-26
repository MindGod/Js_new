function FirstFactorial(num){
	 if (num === 0 || num === 1){
	 	return 1;
	 } else {
	 	console.log(num)
	 	return num * FirstFactorial(num - 1);
	 }
}

var fact = 0;
fact += FirstFactorial(parseInt(prompt("Whats your number?")));
console.log(fact);