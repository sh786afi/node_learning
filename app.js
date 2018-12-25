console.log('Starting app.js');

//const path=require('path');
const fs=require('fs');
//const os=require('os');
const _=require('lodash');
const notes=require('./notes.js'); 

var command =process.argv[2];
console.log('Command',command);
console.log(process.argv);
if(command==='add'){
    console.log('adding new note');
}
else if(command==='list'){
    console.log('listing all note');
}
else if(command==='read'){
console.log('reading note');
}
else if(command==='remove'){
    console.log('removing note');
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



