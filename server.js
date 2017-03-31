var user = require('./user');
var db = require('./db');

function run() {
	var vasya = new user.User('Васян', db.getRandCar(),db.getRandHome());
	var petya = new user.User('Петюня',db.getRandCar(),db.getRandHome());
	
	vasya.hello(petya);
	vasya.checkHome(petya);
	petya.checkHome(vasya);

}

if (module.parent)
{
	exports.run = run;
}	
else {
	run();
}