let realNumber;
let firstNum = true;
let currentNumber = "";
let allNum = [];
let allSign = ["+", "+"];
let total = 0;
let x = 0;
let i;

function addToNumber(val){
currentNumber += `${val}`;
document.getElementById("answer").innerHTML = currentNumber;
realNumber = Number(currentNumber);
return realNumber;
}

function calcEqu(val){
	allNum[x] = realNumber;
	console.log(allNum[x]);
	document.getElementById("answer").innerHTML = allNum[x];
	x++;
	allSign[x] = val;
	console.log(allSign[x]);
	currentNumber = "";
	realNumber = 0;
}

function clearEqu(){
	document.getElementById("answer").innerHTML = 0;
	allNum = [];
	allSign = [];
	allNum[0] = total;
	allSign[0] = "+";
	total = 0;
	x = 0;
	realNumber = 0;
	currentNumber = "";
}

function calcTotal(){
	allNum[x] = realNumber;
	for (i = 0 ; i <= x ; i++){
		switch(allSign[i]){
		case '+':

			total += allNum[i];
			console.log(total);
			break;
		case '-':

			total -= allNum[i];
			console.log(total);
			break;
		case '/':
			total = total / allNum[i];
			console.log(total);
			break;
		case '*':
			total = total * allNum[i];
			console.log(total);
			break;
		}
	}
	document.getElementById("answer").innerHTML = total;
	allNum = [];
	allSign = [];
	allNum[0] = total;
	allSign[0] = "+";
	total = 0;
	x = 1;
	realNumber = 0;
}