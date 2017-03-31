var user = require('./user');
var db = require('./db');

function run() {
	var vasya = new user.User(db.getRandCar(),db.getRandHome());
	var petya = new user.User(db.getRandCar(),db.getRandHome(), vasya);
	
	console.log("\n");
	vasya.hello(petya);
	console.log("\n");
	petya.hello(vasya);
	console.log("\n");
	vasya.checkHome(petya);
	console.log("\n");
	petya.checkHome(vasya);

	

}

if (module.parent)
{
	exports.run = run;
}	
else {
	run();
}