function Add(num){
	if (num === 1){
		return 1;
	} else {
		return num * Add(num - 1);
	}
}
var fact = 0;
fact += Add(parseInt(prompt("Whats your number?")));
console.log(fact);