var phrases;
var cars;
var house;
var name;
var logger = require("../logger")

exports.connect = function()
{
	phrases=require("./ru");
	cars=require("./cars");
	house=require("./home");
	name=require("./names");
}
exports.getPhrase = function (name) {
	if (phrases[name]){
		return phrases[name];
	}else{
		logger("нихуя нет блять");
	}
}
exports.getCar = function (car) {
	if (cars[car]){
		return cars[car];
	}else{
		return null;
	}

}
exports.getHome = function (home) {
	if (house[home]){
		return house[home];
	} else {
		logger("Временно бомж.");
		return null;
	}
	
}

exports.getRandCar = function (){
	var keys = Object.keys(cars);
	var rand = getRandomArbitary(0, keys.length);
	return keys[rand];
}

exports.getRandHome = function (){
	var keys = Object.keys(house);
	var rand = getRandomArbitary(0, keys.length);
	return keys[rand];
}

exports.getRandName = function (previousUser){
	var keys = Object.keys(name);
	var rand = getRandomArbitary(0, keys.length-1);
	var randKey = keys[rand];
	if (previousUser && name[randKey] == previousUser.name){
		rand = getRandomArbitary(0, keys.length-1);
		randKey = keys[rand];
	}
	return name[randKey];
}

function getRandomArbitary (min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
