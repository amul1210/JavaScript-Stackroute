/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var number1,
    number2,
    number3,
    number4,
    number5,
    largest;

    largest = 0;
    number1 = window.prompt("Please input first number", 0);
    number2 = window.prompt("Please input second number", 0);
    number3 = window.prompt("Please input third number", 0);
    number4 = window.prompt("Please input fourth number", 0);
    number5 = window.prompt("Please input fifth number", 0);

    largest = number1;
    if ( +number2 > +number1 )
      largest = number2;

    if (+number3 > +largest)
      largest = number3;

    if (+number4 > +largest)
      largest = number4;

    if (+number5 > +largest) 
      largest = number5;

    alert("The largest number is = " + largest);
