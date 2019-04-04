users = [
    {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
    }
    },
    {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
    },
    {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
    }
    }
]


function userLanguages(users){
    let results = ""
    for(var i=0; i<users.length; i++){
        results += users[i].fname + " " + users[i].lname + " knows ";
        for(var j=0; j<users[i].languages.length; j++){
            if(j < users[i].languages.length - 1){
                results += users[i].languages[j] + ", ";
            }
            else{
                results += "and " + users[i].languages[j] + ".\n"
            }
        }
    }
    console.log(results)
}
userLanguages(users)
