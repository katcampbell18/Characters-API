console.log("inside of routes.js");
const Chars = require("../controllers/chars");	


module.exports = function(app) {
    app.get("/char", Chars.getAll)
    app.get("/char/:_id", Chars.getOne);
    app.post("/char", Chars.create);
    app.put("/char/:_id", Chars.update);
    app.delete("/char/:_id", Chars.remove);
    app.get("/char/:_id", Chars.edit);	
} 
