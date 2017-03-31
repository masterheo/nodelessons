var phrases;
var cars;
var house;
var logger = require("../logger")

exports.connect = function()
{
	phrases=require("./ru");
	cars=require("./cars");
	house=require("./home")
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
		logger("шол бы ты астедава, сцука");
	}

}
exports.getHome = function (home) {
	if (house[home]){
		return house[home];
	}else{
		logger("Временно бомж");
	}
	
}