var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};
var kanga = {character: "Kanga"};
var owl = {character: "Owl"};
var chris_robin = {character: "Christopher Robin"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var piglet = {character: "Piglet"};
var bees = {character: "Bees"};
var pooh = {character: "Winnie the Pooh"};
var tigger = {character: "Tigger"};
tigger.north = pooh;
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = chris_robin;
piglet.east = pooh;
piglet.north = owl;
bees.west = pooh;
bees.north = rabbit;
owl.south = piglet;
owl.east = chris_robin;
chris_robin.west = owl;
chris_robin.south = pooh;
chris_robin.east = rabbit;
chris_robin.north = kanga;
rabbit.south = bees;
rabbit.west = chris_robin;
rabbit.east = gopher;
kanga.south = chris_robin;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

var player = {location: tigger};
function move(dir){
    if(dir=="north"){
        if(player.location.north==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.north;
            console.log("Your are now at " + player.location.character + "'s house.");
        }
    }
    if(dir=="west"){
        if(player.location.west==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.west;
            console.log("Your are now at " + player.location.character + "'s house.");
        }
    }
    if(dir=="east"){
        if(player.location.east==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.east;
            console.log("Your are now at " + player.location.character + "'s house.");
        }
    }
    if(dir=="south"){
        if(player.location.south==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.south;
            console.log("Your are now at " + player.location.character + "'s house.");
        }
    }
}

move("north");
move("north");