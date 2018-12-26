console.log('Starting notes.js');
const fs=require('fs');
var addNote=(title, body)=>{
//console.log('Adding note',title,body);
var notes=[];
var note={
title,
body
};
try{
    var notesString=fs.readFileSync('notes-data.json');
    notes=JSON.parse(notesString);
   }
    catch(e){

   }
//    var duplicateNotes=notes.filter((note)=>{
//    return note.title===title;
//    });
   var duplicateNotes=notes.filter((note)=>note.title===title);
   if(duplicateNotes==0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
   }
};
var getAll=()=>{
    console.log('Getting all notes');
};
var getNote=(title)=>{
console.log('Getting note',title);
};
function removeNote(title){
console.log('Removing Note',title);
};
module.exports={
addNote,
getAll,
getNote: getNote,
removeNote
};