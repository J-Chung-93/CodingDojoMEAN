function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    Ninja.prototype.sayName = function () {
        console.log("My ninja name is " + name + "!");
    };
    Ninja.prototype.showStats = function () {
        console.log("Name: " + name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    };
    Ninja.prototype.drinkSake = function () {
        this.health += 10;
    };
    Ninja.prototype.punch = function (enemy) {
        enemy.health -= 5;
        console.log(enemy.name + " was punched by " + this.name + " and lost 5 health!");
    };
    Ninja.prototype.kick = function (enemy) {
        var damage = 15 * strength;
        enemy.health -= damage;
        console.log(enemy.name + " was kicked by " + this.name + " and lost " + damage + " health!");
    };
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();