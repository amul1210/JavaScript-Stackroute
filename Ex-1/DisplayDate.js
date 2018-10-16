/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var date = new Date();
var dd = date.getDay();
var mm = date.getMonth();
var yyyy = date.getFullYear();
var timeString = date.toTimeString();

if(mm<10 && dd<10){
 var inFormat = "0"+mm+"/"+"0"+dd+"/"+yyyy+"  "+timeString;
}
else if(mm<10 && dd>10){
 var inFormat = "0"+mm+"/"+dd+"/"+yyyy+"  "+timeString;
}
else if(mm>10 && dd<10){
   var inFormat = mm+"/"+"0"+dd+"/"+yyyy+"  "+timeString;
}
else{
 var inFormat = mm+"/"+dd+"/"+yyyy+"  "+timeString;
}

console.log(inFormat);
alert(inFormat);