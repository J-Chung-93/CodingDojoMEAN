var mongoose = require("mongoose");
var People = mongoose.model("People");

module.exports = {
    index: function(req, res) {
        People.find({}, function(err, person) {
        if (err) {
            res.json(err);
        } else {
            res.json(person);
        }
        });
    },

    add: function(req, res) {
        People.create({ name: req.params.name }, function(err, person) {
        if (err) {
            res.json(err);
        } else {
            res.json({ added: true });
        }
        });
    },

    delete: function(req, res) {
        People.remove({ name: req.params.name }, function(err, person) {
        if (err) res.json(err);
        else res.json({ removed: true });
        });
    },

    show: function(req, res) {
        People.findOne({ name: req.params.name }, function(err, person) {
        if (err) res.json(err);
        else res.json(person);
        });
    }
};