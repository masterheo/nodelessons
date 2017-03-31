var db = require("../db");
var logger = require("../logger")(module);
db.connect();
function User (name, car, home) {
	this.name = name;
	this.car = car;	
}

User.prototype.hello = function(who) {
	logger(db.getPhrase("Hello") + who.name + ", есть тачка?");
	who.move(this);
}
User.prototype.move = function(whom) {
	logger(db.getPhrase("Hello") + whom.name + db.getCar(this.car),"давай подвезу.");
}
User.prototype.home = function(whom) {
	logger(db.getHome(this.home)," заходи в гости");
}

exports.User = User;