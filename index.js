var express = require('express');
var fs = require('fs');
var app = express();
var users = [{ name: "Anil " }, { name: "Xyz " }]

function readFile(name, cb) {
    fs.readFile("files/" + name + ".txt", function (err, data) {
        if (err) {
            return cb(err);
        }
        cb(err, data.toString());
    });
}

app.get("/users", function (req, res, next) {
    var token = req.query.token;
    if (!token) {
        res.send("Error")
    } else {
        next()
    }
},
    function (req, res) {
        res.send(users);
    })

app.get('/learn', function (req, res) {
    var technology = req.query.technology;
    readFile(technology, function (err, data) {
        res.send(data);
    })
});


app.listen(3000, function () {
    console.log('App is listening on port 3000');
});