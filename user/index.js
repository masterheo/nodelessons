var db = require("../db");
var logger = require("../logger")(module);
db.connect();
function User (name, car) {
	this.name = name;
	this.car = car;	
}

User.prototype.hello = function(who) {
	logger(db.getPhrase("Hello") + who.name);
	who.move(this);
}
User.prototype.move = function(whom) {
	logger("Есть ", db.getCar(this.car)," давай подвезу.");
}

exports.User = User;