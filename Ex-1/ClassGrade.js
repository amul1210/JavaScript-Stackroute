/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var studentsMarks = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
function getAverageGrade(studentsMarks){
	var numberOfStudents = studentsMarks.length;
	var sumOfMarks = 0;
	for(let x=0;x<numberOfStudents;x++){
		sumOfMarks += studentsMarks[x][1];
	}
	var averageMarks = sumOfMarks/numberOfStudents;
	console.log(averageMarks);

	if(averageMarks <=100 && averageMarks > 90)
		return 'A';
	else if(averageMarks <=90 && averageMarks > 80)
		return 'B';
	else if(averageMarks <=80 && averageMarks > 70)
		return 'C';
	else if(averageMarks <=70 && averageMarks > 60)
		return 'D';
	else
		return 'F';
}

console.log(getAverageGrade(studentsMarks));