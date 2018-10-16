/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var queryString = window.prompt("Please insert a query string");
var queryChar = window.prompt("Please insert a query character");

function frequencyOfLetter(queryString, queryChar){
	var regex = new RegExp(queryChar,"gi");
	return queryString.match(regex).length;
}

alert("The frequency of the character is = " + frequencyOfLetter(queryString, queryChar));