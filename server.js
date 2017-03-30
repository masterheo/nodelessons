var user = require('./user');

function run() {
	var vasya = new user.User('Васян', 'Mercedes');
	var petya = new user.User('Петюня','Audi');
	
	vasya.hello(petya);

}

if (module.parent)
{
	exports.run = run;
}	
else {
	run();
}