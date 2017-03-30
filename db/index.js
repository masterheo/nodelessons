var phrases;
var cars;
var logger = require("../logger")

exports.connect = function()
{
	phrases=require("./ru");
	cars=require("./cars");
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
