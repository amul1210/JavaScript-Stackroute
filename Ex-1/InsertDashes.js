/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var number;
var array=[];

number = window.prompt("Please insert a number", 0);
var digits = (""+number).split("");
for(i=0;i<digits.length;i++){
  if(digits[i]%2==0 && digits[i+1]%2==0){
    array.push(number[i],'-');
  }else{array.push(number[i])}
}
// var answer = digits.toString();
alert(array.join(''));
