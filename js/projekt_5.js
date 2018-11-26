var mass = [];
mass[0] = 1;
mass[1] = 18;
mass[2] = 17;
var result;

function BiggestNr(){
	if (mass[0] > mass[1] && mass[0] > mass[2]){
		result = mass[0];
	} else if (mass[1] > mass[0] && mass[1] > mass[2]){
		result = mass[1];
	} else if (mass[2] > mass[0] && mass[2] > mass[1]){
		result = mass[2];
	}


	console.log(result);
	return result;
}




