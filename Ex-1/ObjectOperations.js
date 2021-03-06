/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


// Getting all the programmers
function getAllProgrammers(myObj){
	result = [];
	myObj.forEach(function (item){
		if(item.occupation == 'Programmer')
			result.push(item);
	});
  result = result.sort(function(a,b){return ('' + a.age).localeCompare(b.age)});
  result = result.reverse();
	return result;
}
console.log(getAllProgrammers(myObj));


// Arranging them in decreasing age
myObj = myObj.sort(function(a,b){return ('' + a.age).localeCompare(b.age)});
myObj = myObj.reverse();
console.log(myObj);

// Adding them according to their occupation
function objectOfObjects(myObj){
	var finalresult = [];
	var teamLeads = [];
	var programmers = [];
	myObj.forEach(function (item){
	 if(item.occupation == 'Team Leader'){
		 teamLeads.push(item);
	 }else if(item.occupation == 'Programmer'){
      programmers.push(item);
	}
});finalresult.push(teamLeads);
	finalresult.push(programmers);
	
	return finalresult;
}
console.log(objectOfObjects(myObj));

//using map to get all names
var names = [];
names = myObj.map(function(a){return a.name});
console.log(names);

