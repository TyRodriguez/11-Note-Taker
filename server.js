//require dependencies
const express = require("express");
let path = require("path");
// const jsNotes = require("../db/db.json");

//set up express app
const app = express();
const PORT = 8080;

//app.use middleware section to do parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

//require json file that stores the notes from the front end
const jsNotes = [];

//Routes
//=========================
module.exports = function(app){

//route to send user to index.html - GET
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//route to send user to notes.html - GET
app.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});
};

//route that displays all notes page? - GET
app.get("api/notes",function(req,res){
    // return res(jsNotes);
    return res.json(jsNotes);
});
//route that creates new note - POST
app.post("api/notes",function(req,res){
    const newNote = req.body;
    console.log(newNote);
    jsNotes.push(newNote);
    // res(jsNotes)
    res.json(jsNotes)
})
// //route that deletes a note - DELETE
// app.delete("api/notes/:id",function(req,res){

// })

//server listening
//=============================
app.listen(PORT,function(){
    console.log(`Listening on PORT ${PORT}`);
});