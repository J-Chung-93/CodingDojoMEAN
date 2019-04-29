    
var person = require("../controllers/people");

module.exports = function(app) {
    app.get("/", person.index);

    app.get("/new/:name", person.add);

    app.get("/remove/:name", person.delete);

    app.get("/:name", person.show);
};