console.log("inside of chars.js");

const mongoose = require("mongoose");
const Char = mongoose.model("Char");

class Chars{
    index(req,res){
        Char.find()
        .then(chars => {res.render("index", {chars}); })
        .catch(err => {console.log("err"); });
    }
    create(req,res){
        let c = new Char(req.body);
        c.save()
        .then(() => {res.redirect("/"); })
        .catch(err => {console.log("err"); });
    }
    remove(req,res){
        Char.findByIdAndRemove({_id: req.params._id })
        .then(() => {res.redirect("/"); })
        .catch(err => {console.log("err"); });
    }
    edit(req,res){
        Char.findOne({_id: req.params._id})
        .then(() => {res.render("edit"), {char}; })
        .catch(err => {console.log("err"); });
    }
    update(req,res){
        Char.findByIdAndUpdate({_id: req.params._id})
        .then(() => {res.render("update"), {char}; })
        .catch(err => {console.log("err"); });
    }
}