var db = require("../db");
var logger = require("../logger")(module);
db.connect();
function User (name, car, home) {
	this.name = name;
	this.car = car;	
	this.home = home;
}

User.prototype.hello = function(who) {
	logger(db.getPhrase("Hello") + who.name + ", есть тачка?");
	who.move(this);
}

User.prototype.move = function(whom) {
	logger(db.getPhrase("Hello") + whom.name + db.getCar(this.car),"давай подвезу.");
}

User.prototype.checkHome = function(whom) {
	logger(whom.name + ", есть хата?");
	if (db.getHome(whom.home)){
		logger(this.name + " да." + db.getHome(whom.home) + "заходи в гости");	
	} else {
		logger("Временно бомж");
	}
	
}

exports.User = User;