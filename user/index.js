var db = require("../db");
var logger = require("../logger")(module);
db.connect();
function User (car, home, previousUser) {
	this.name = db.getRandName(previousUser);
	this.car = car;	
	this.home = home;
}

User.prototype.hello = function(who) {
	logger(db.getPhrase("Hello") + who.name + ". Есть тачка?");
	who.move(this);
}

User.prototype.move = function(whom) {
	if (db.getCar(this.car)){
		logger(db.getPhrase("Hello") + whom.name + db.getCar(this.car),"давай подвезу.");	
	} else {
		logger(db.getPhrase("Hello") + whom.name + ". Ану песдуй атсюдава, сцука!!!!!11");
	}
}

User.prototype.checkHome = function(whom) {
	logger(whom.name + ", есть хата?");
	if (db.getHome(whom.home)){
		logger("Да, " + this.name+"."+ db.getHome(whom.home) + "заходи в гости.");	
	} else {
		logger("Временно бомж");
	}
	
}

exports.User = User;