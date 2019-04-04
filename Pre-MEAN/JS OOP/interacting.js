var eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("Thanks for noticin' me.");
    }
};
var heffalumps = {
    character: "Heffalumps",
    greet: function(){
        console.log("Heffa nice day!");
    }
};
var kanga = {
    character: "Kanga",
    greet: function(){
        console.log("Why, hello dear.");
    }
};
var owl = {
    character: "Owl",
    greet: function(){
        console.log("This reminds me of the time when...");
    }
};
var chris_robin = {
    character: "Christopher Robin",
    greet: function(){
        console.log("Silly ol' bear!");
    }
};
var rabbit = {
    character: "Rabbit",
    greet: function(){
        console.log("You can't help respecting anybody who can spell Tuesday, even if he doesn't spell it right.");
    }
};
var gopher = {
    character: "Gopher",
    greet: function(){
        console.log("By Dinghy!");
    }
};
var piglet = {
    character: "Piglet",
    greet: function(){
        console.log("Oh, d-d-d-dear!");
    }
};
var bees = {
    character: "Bees",
    greet: function(){
        console.log("Bzzzzz...");
    }
};
var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Think, think, think!");
    }
};
var tigger = {
    character: "Tigger", 
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};
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

var player = {
    location: tigger,
    honey: false,
};
var locations = [heffalumps, eeyore, kanga, owl, chris_robin, rabbit, gopher, piglet, pooh, tigger]; // bees taken out
var goal = Math.floor(Math.random() * Math.floor(locations.length));
var rand_loc = '';

function move(dir){
    if(dir=="north"){
        if(player.location.north==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.north;
            console.log("Your are now at " + player.location.character + "'s house.");
            player.location.greet();
            if (player.honey == false){
                pickUp(player.location);
            }else if (player.honey == true){
                drop(player.location);
            }
        }
    }
    if(dir=="west"){
        if(player.location.west==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.west;
            console.log("Your are now at " + player.location.character + "'s house.");
            player.location.greet();
            if (player.honey == false){
                pickUp(player.location);
            }else if (player.honey == true){
                drop(player.location);
            }
        }
    }
    if(dir=="east"){
        if(player.location.east==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.east;
            console.log("Your are now at " + player.location.character + "'s house.");
            player.location.greet();
            if (player.honey == false){
                pickUp(player.location);
            }else if (player.honey == true){
                drop(player.location);
            }
        }
    }
    if(dir=="south"){
        if(player.location.south==null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.south;
            console.log("Your are now at " + player.location.character + "'s house.");
            player.location.greet();
            if (player.honey == false){
                pickUp(player.location);
            }else if (player.honey == true){
                drop(player.location);
            }
        }
    }
}

function mission(){
    rand_loc = locations[goal];
    console.log({rand_loc});
    console.log("Please deliver honey to " + rand_loc.character + "!");
    return rand_loc;
}

function pickUp(current_location){
    if(current_location == bees){
        player.honey = true;
        console.log("You've gathered some honey!");
    }
    else{
        console.log("Whoops! There's no honey here!")
    }
}

function drop(current_location){
    if(current_location == rand_loc){
        console.log("Congratulations! You delivered the honey to " + rand_loc.character + "!");
    }else{
        console.log("Whoops! This isn't the place that needs the honey!");
    }
}

mission();
move("north");
move("east");
move("north");
move("west");
move("north");
move("north");
