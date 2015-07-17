//Utility function
//A simple random number generator
$(document).ready(function(){

	$("#alertButton").on('click', function(event){
		//make it alert randomAge + randomSex + randomWeight
	$("#alertButton").children().remove();
	$("#anotherButton").append('<p>' + randomName + ' ' + randomLastName + ' is ' + randomAge + ' years old.</p>');
	$("#anotherButton").append('<p> They are also a ' + randomSex + '.</p>');
	$("#judgeyButton").append('<p>And they weigh a SHOCKING ' + randomWeight + ' lbs.</p>');
	});
});
function Person(randomAge, randomSex, randomWeight, randomName, randomLastName){
	this.randomAge = randomAge;
	this.randomSex = randomSex;
	this.randomWeight = randomWeight;
	this.randomName = randomName;
	this.randomLastName = randomLastName;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var randomAge = randomNumber(1, 100);
var randomSex = randomNumber(0, 1);
var randomWeight = randomNumber(1, 100);
var randomName = randomNumber(0, 100);
var femaleArray = ["Tina", "Sara", "Allison", "Sapphire", "Candy"];
var maleArray = ["Bert", "Ted", "Jerome", "Warren", "Steve"];
var lastNameArray = ["Sheckler", "Chipperson", "Hughes", "Bennet", "Fergurson"];


if (randomSex == 0){
	randomSex = "Male";
} else {
	randomSex = "Female";
}

if (randomSex == "Male"){
	randomName = maleArray[Math.floor(Math.random() * maleArray.length)];
} else {
	randomName = femaleArray[Math.floor(Math.random() * femaleArray.length)];

}

var randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];





