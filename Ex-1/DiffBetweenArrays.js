/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var array1 = [1,2,3,4]
var array2 = [1,2,3,4,5,6,7,8]
function diffBetweenArrays(arr1,arr2){
  let difference = arr1
                   .filter(x => !arr2.includes(x))
                   .concat(arr2.filter(x => !arr1.includes(x)));
  return difference;
}

console.log(diffBetweenArrays(array1,array2))