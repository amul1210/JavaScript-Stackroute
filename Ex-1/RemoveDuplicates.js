
var array = ["DELHI" , "NEWYORK" , "DELHI" , "GOA" , "MUMBAI" , "CALIFORNIA" , "GOA" ]

var removeDuplicates = function(arr){
    var unique_array = [];
    for(i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
}
console.log(removeDuplicates(array));
