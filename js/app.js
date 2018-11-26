// var userChoice = prompt("Do you choose rock, paper or scissors?");
// console.log(userChoice);
// var number = Math.floor((Math.random() * 10) + 1);
// if (number <3.33){
// 	number="rock";
// }else if (number <6.66){
// 	number="paper";
// }else if (number <=10){
// 	number="scissors";
// }
// var result = '';
// if (number == userChoice){
// 	result = 'tie';
// } else if (userChoice == 'scissors'){
// 	if (number == 'rock'){
// 		result = 'Bot won';
// 	} else if (number == 'paper'){
// 		{
// 		result = 'You win';
//        }
// 	} 


// document.getElementById('text').innerHTML = 'Kompas istrauke ' +number;
// document.getElementById('text2').innerHTML = 'Tu istraukei ' +userChoice; 
// document.getElementById('text3').innerHTML = result;

// #2

// var userChoice = prompt("How old are you?");

// if (userChoice <24){
// 	userChoice="You have your whole life ahead of you!";
// } else if (userChoice <55){
// 	userChoice="You lived about 50% of your life";
// } else if (userChoice <85){
// 	userChoice="You are going to die soon";
// }

// document.getElementById('text').innerHTML = 'Your result: ' +userChoice;

// #3

// var PVM = 1.21;
// var totalAmount;
// var price= prompt('Kaina?');
// var hadDiscount= confirm('Suteikti nuolaida?');
// var discount;
// if (hadDiscount == true){
// 	discount=prompt('Kokia nuolaida suteikti?');
// } else {
// 	discount = 0;
// }
// var totalAmount = (price-discount)*PVM;


// document.getElementById('text').innerHTML = 'Your price: ' + price + ' Your discount: ' 
// +discount + ' Your total amount: ' + totalAmount ;


//  #4

// var amount= parseInt(prompt('What is the first number you choose?'));
// var amount2=parseInt(prompt('What is the second number you choose?'));
// var amount3=prompt('Ka tu pasirinksi: daugyba, dalyba ar sudeti?')
// var Ramount;

// if (amount3 == 'daugyba'){
// 	Ramount=(amount*amount2);
// } else if (amount3 == 'dalyba'){
// 	Ramount=(amount/amount2);
// } else if (amount3 == 'sudeti') {
// 	Ramount=(amount+amount2);
// }

// console.log(Ramount);

// #5

// var person = [
// 'John',
// 25,
// 'Tucker',
// 'Blue',
// 'Red'
// ];

// for (var i = 0; i < person.length; i=i +2){
// console.log(person[i]);
	
// }

//  #6

// var masinos =[
// 'Nissan Skyline R33',
// 'Kregzde',
// 'Subarikas',
// 'BMW m3 e36'
// ]

// for (var i= 0; i < masinos.length; i=i +2){
// 	var num = i+1;
// 	var numChoice;
// 	if (num == 1){
// 		numChoice = 'st';
// 	} else if (num == 2){
// 		numChoice = 'nd';
// 	} else if (num == 3){
// 		numChoice = 'rd';
// 	} else {
// 		numChoice = 'th'
// 	}
// 	document.write('My' + num + numChoice + ' choice ' +  masinos[num-1] +  '</br');
// 	}


//  #7

// for (var mult = 0; mult < 10; mult++){
//     for (var mult2 = 0; mult2 < 10; mult2++){
//     	var result = mult * mult2;
//     	console.log(result);
//     	document.write ('<p>' + mult + '*' + mult2 + '=' + result +  '</p>');


// }
// }    	

//  #8

// var arr= [
// ['Petras', 28, 'Vilnius', 'Suzuki'],
// ['Vilma', 21, 'Kaunas', ['VW', ' BMW']],
// [['Stasys', ' Rima'], [21, 23], 'Birzai', 'Honda']
// ];
// var prefix;
// for (var i=0; i < arr.length; i++){

// 	document.write ('<div> ' + '<h3>' + (i+1) + '</h3>');

// 		for (var j=0; j < arr[i].length; j++){
// 			if (j == 0){
// 				prefix= ' name: ';
// 			} else if (j == 1){
// 				prefix= ' age: ';
// 			} else if (j == 2){
// 				prefix= ' city: ';
// 			} else if (j == 3){
// 				prefix= ' vehicle: ';
// 			} 
// 			document.write('<p>' + prefix);	
//             if (Array.isArray(arr[i][j])){
//             	for (var k=0; k < arr[i][j].length; k++){

//                     if (arr[i][j][arr[i][j].length - 1] == arr[i][j][k]){
//                     	document.write(arr[i][j][k] + '. ');
//                     } else {
//                     	document.write( arr[i][j][k] + ', ');
//                     }
                   

      				
//             	} 
            	
//         	}   else{
//         		document.write(arr[i][j] + '</p>');	
//         	}
            
// 		}
	
// 	document.write('</div>');
	
// }

// #9

// var arr = [3, 7, 0];
// var userChoice = prompt("What is your number?");
// for (var i=0; i < userChoice.length; i++){
//     var arr1 = arr.push(userChoice[i]);
//     console.log(arr1);

// }

var arr = [3, 7, 0];
var arr1 = arr.toString();
var userChoice = prompt("What is your number?");
for (var i=0; i < userChoice.length; i++){
    arr.push(userChoice[i]);
}
    var total = arr1.replace(/,/g, '') +
            userChoice.replace(/,/g, '');

document.write(total);