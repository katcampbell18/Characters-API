const express = require("express"),
     mongoose = require("mongoose"),
           bp = require("body-parser"),
          app = express(),
         port = 8000;

//  app.use(express.static(__dirname + "/static"));
app.use(bp.json());

 mongoose.connect("mongodb://localhost/chars");

 const CharSchema = new mongoose.Schema({
    name: String,
    race: String,
    class: String,
}, {timestamps: true});

 const Char = mongoose.model("Char", CharSchema);

 app.get("/", (req, res) => {
    Char.find((err, chars) => {
        if(err) {
            console.log(err);
        }
        res.render("index", {chars});
    });
});

 app.post("/char", (req, res) => {
    let c = new Char(req.body);
    c.save(err => {
        if(err){
            console.log(err);  
        } 
        res.redirect("/");
    });
});

 app.get("/remove/:_id", (req, res) => {
    Char.findByIdAndRemove({_id: req.params._id}, err => {
        if(err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

 // when updating use something like this
// Char.findOneAndUpdate()

 app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});