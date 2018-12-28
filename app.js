
console.log('Starting app.js');
//const path=require('path');
const fs=require('fs');
//const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes.js'); 
const argv=yargs.argv;
//var command =process.argv[2];
var command=argv._[0];
console.log('Command',command);
//console.log('process',process.argv);
console.log('yargs',argv);
if(command==='add'){
        //console.log('adding new note');
    var note=notes.addNote(argv.title, argv.body);
    if(note){
            console.log('note created');
        notes.logNote(note);
    }
}
else if(command==='list'){
       //console.log('listing all note');
   var allNotes=notes.getAll();
   console.log(`Printing ${allNotes.length} note(s)`);
   console.log('Note',allNotes);
   allNotes.forEach((addEachNote) => {      
       notes.logNote(addEachNote);
   });
}
else if(command==='read'){
    //console.log('reading note');
var note=notes.getNote(argv.title);
if(note){
        console.log('note found');
    notes.logNote(note);
}
else{
        console.log('note not found');
}
}
else if(command==='remove'){
       var noteRemoved=notes.removeNote(argv.title);
   var message=noteRemoved ? 'note was removed' : 'note was not removed';
   console.log(message);
    // console.log('removing note'); 
}
else{
        console.log('command not recognized');
}

// var pathObj=path.parse(__filename);
// console.log(pathObj);
// // console.log(_.isString(true));
// // console.log(_.isString('Shafi'));
// var filteredArray=_.uniq(['shafi',1,2,3,1,2,3,4,4,5,5,'shafi','akhtar']);
// console.log(filteredArray);
// var totalMem=os.totalmem();
// var freemem=os.freemem();
// var osType=os.type();
// var networkInter=os.networkInterfaces();

// //console.log('Total memory: '+totalMem);

// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freemem}`);
// console.log(`OS Type: ${osType}`);



