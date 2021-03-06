console.log('Starting notes.js');
const fs=require('fs');
var fetchNote=()=>{
    try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
       }
        catch(e){
            return [];
       }

};
var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote=(title, body)=>{
//console.log('Adding note',title,body);
var notes=fetchNote();
var note={
title,
body
};
//    var duplicateNotes=notes.filter((note)=>{
//    return note.title===title;
//    });
   var duplicateNotes=notes.filter((note)=>note.title===title);
   if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
   }
};
var getAll=()=>{
    return fetchNote();
    
};
var getNote=(title)=>{
var notes=fetchNote();
var filterNotes=notes.filter((note)=>{
return note.title===title;
});
return filterNotes[0];
};
function removeNote(title){
var notes=fetchNote();
var filterNotes=notes.filter((note)=>note.title!==title );
//console.log('filterNotes',filterNotes);
saveNotes(filterNotes);
return notes.length!==filterNotes.length;
};
var logNote=(note)=>{
     debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    //console.log('Body',note.body);
     console.log(`Body:${note.body}`);
}
module.exports={
addNote,
getAll,
getNote: getNote,
removeNote,
logNote
};